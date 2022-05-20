import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroViewComponent } from './cadastro-view/cadastro-view.component';
import { CadastroListComponent } from './cadastro-list/cadastro-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroViewComponent,
    CadastroListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
