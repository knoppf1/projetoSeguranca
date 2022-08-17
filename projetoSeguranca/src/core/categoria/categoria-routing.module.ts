import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaViewComponent } from './categoria-view/categoria-view.component';

const routes: Routes = [
  {
    path: 'categoria',
    component: CategoriaListComponent
    },

    {
      path: 'view',
      children: [
        {
          path: '',
          component: CategoriaViewComponent
        },
        {
          path: ':id',
          component: CategoriaViewComponent
        }
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
