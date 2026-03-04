import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { BusquedaRoutingModule } from './busqueda-routing.module';
import { ListaBusquedaComponent } from './components/lista-busqueda/lista-busqueda.component';
import { DetalleBusquedaComponent } from './components/detalle-busqueda/detalle-busqueda.component';
import { PasswordValidatorDirective } from '../../shared/directives/password-validator.directive';

@NgModule({
  declarations: [
    ListaBusquedaComponent,
    DetalleBusquedaComponent,
    PasswordValidatorDirective
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    BusquedaRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BusquedaModule {}
