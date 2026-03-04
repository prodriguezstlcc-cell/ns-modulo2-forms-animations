import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { action } from '@nativescript/core';

@Component({
  selector: 'ns-lista-busqueda',
  templateUrl: './lista-busqueda.component.html'
})
export class ListaBusquedaComponent implements OnInit {
  textoBusqueda: string = '';
  items: any[] = [
    { id: 1, titulo: 'Angular Basics',    categoria: 'Tech'   },
    { id: 2, titulo: 'NativeScript Tips', categoria: 'Mobile' },
    { id: 3, titulo: 'TypeScript Guide',  categoria: 'Tech'   }
  ];

  constructor(private router: RouterExtensions) {}

  ngOnInit() {}

  // Navegación al detalle con RouterExtensions
  onTap(item: any) {
    this.router.navigate(['/busqueda/detalle', item.id]);
  }

  // Pull to Refresh — agrega elemento nuevo aleatorio
  onRefresh(args: any) {
    const nuevo = {
      id: Date.now(),
      titulo: 'Item nuevo ' + Math.floor(Math.random() * 100),
      categoria: 'Random'
    };
    this.items = [...this.items, nuevo];
    args.object.refreshing = false;
  }

  // Action dialog para cambiar categoría
  async onCategoria(item: any) {
    const result = await action(
      'Seleccionar categoría',
      'Cancelar',
      ['Tech', 'Mobile', 'Backend', 'Random']
    );
    if (result !== 'Cancelar') {
      item.categoria = result;
    }
  }

  // Gesto doubleTap
  onDoubleTap(args: any) {
    args.object.animate({ rotate: 360, duration: 500 });
  }

  // Gesto longPress
  onLongPress(args: any) {
    args.object.animate({ scale: { x: 1.3, y: 1.3 }, duration: 300 })
      .then(() => args.object.animate({ scale: { x: 1, y: 1 }, duration: 300 }));
  }

  // Animación en botón
  animarBoton(view: any) {
    view.animate({ rotate: 360, duration: 800 });
  }

  // Toast
  mostrarToast() {
    const Toast = require('@nativescript/toastify').Toastify;
    Toast.makeText('¡Elemento guardado correctamente!').show();
  }
}
