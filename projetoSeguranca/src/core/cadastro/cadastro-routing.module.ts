import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroListComponent } from './cadastro-list/cadastro-list.component';
import { CadastroViewComponent } from './cadastro-view/cadastro-view.component';

const routes: Routes = [
  {
    path: 'list',
    component: CadastroListComponent
    },
    // {
    //   path: 'view',
    //   component: CadastroBaseViewComponent
    // },
    {
      path: 'view',
      children: [
        {
          path: '',
          component: CadastroViewComponent
        },
        {
          path: ':id',
          component: CadastroViewComponent
        }
      ]
    },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
