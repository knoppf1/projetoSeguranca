import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioViewComponent } from './usuario-view/usuario-view.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
