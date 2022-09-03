import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoRoutingModule } from './acesso-routing.module';
import { AcessoComponent } from './acesso/acesso.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AcessoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AcessoRoutingModule
  ]
})
export class AcessoModule { }
