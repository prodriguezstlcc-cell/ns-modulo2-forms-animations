import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-detalle-busqueda',
  templateUrl: './detalle-busqueda.component.html'
})
export class DetalleBusquedaComponent implements OnInit {
  id: string = '';
  item: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: RouterExtensions
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.item = { id: this.id, titulo: 'Detalle item ' + this.id, descripcion: 'Descripción completa del item seleccionado.' };
  }

  goBack() {
    this.router.back();
  }
}
