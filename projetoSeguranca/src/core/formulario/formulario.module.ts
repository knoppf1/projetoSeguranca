import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioListComponent } from './formulario-list/formulario-list.component';
import { FormularioViewComponent } from './formulario-view/formulario-view.component';


@NgModule({
  declarations: [
    FormularioListComponent,
    FormularioViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormularioRoutingModule
  ]
})
export class FormularioModule { }
