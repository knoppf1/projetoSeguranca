import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaViewComponent } from './categoria-view/categoria-view.component';


@NgModule({
  declarations: [
    CategoriaListComponent,
    CategoriaViewComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ]
})
export class CategoriaModule { }
