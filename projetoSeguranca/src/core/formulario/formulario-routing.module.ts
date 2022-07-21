import { FormularioViewComponent } from './formulario-view/formulario-view.component';
import { FormularioListComponent } from './formulario-list/formulario-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroListComponent } from '../cadastro/cadastro-list/cadastro-list.component';
import { CadastroViewComponent } from '../cadastro/cadastro-view/cadastro-view.component';

const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioListComponent
    },

    {
      path: 'formulario/view',
      children: [
        {
          path: '',
          component: FormularioViewComponent
        },
        {
          path: ':id',
          component: FormularioViewComponent
        }
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
