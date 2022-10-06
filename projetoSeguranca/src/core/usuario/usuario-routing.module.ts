import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioViewComponent } from './usuario-view/usuario-view.component';

const routes: Routes = [
  {
    path: 'usuario',
    component: UsuarioListComponent
    },

    {
      path: 'usuario/view',
      children: [
        {
          path: '',
          component: UsuarioViewComponent
        },
        {
          path: ':id',
          component: UsuarioViewComponent
        }
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
