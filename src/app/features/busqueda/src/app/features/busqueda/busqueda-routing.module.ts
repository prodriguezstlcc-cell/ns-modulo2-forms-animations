import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';
import { ListaBusquedaComponent } from './components/lista-busqueda/lista-busqueda.component';
import { DetalleBusquedaComponent } from './components/detalle-busqueda/detalle-busqueda.component';

const routes: Routes = [
  { path: '', component: ListaBusquedaComponent },
  { path: 'detalle/:id', component: DetalleBusquedaComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class BusquedaRoutingModule {}
