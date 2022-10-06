import { FormularioViewComponent } from './../core/formulario/formulario-view/formulario-view.component';
import { FormularioListComponent } from './../core/formulario/formulario-list/formulario-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroListComponent } from 'src/core/cadastro/cadastro-list/cadastro-list.component';
import { CadastroViewComponent } from 'src/core/cadastro/cadastro-view/cadastro-view.component';
import { MapaViewComponent } from 'src/core/mapa/mapa-view/mapa-view.component';
import { CategoriaListComponent } from 'src/core/categoria/categoria-list/categoria-list.component';
import { CategoriaViewComponent } from 'src/core/categoria/categoria-view/categoria-view.component';
import { AcessoComponent } from 'src/core/acesso/acesso/acesso.component';
import { UsuarioListComponent } from 'src/core/usuario/usuario-list/usuario-list.component';
import { UsuarioViewComponent } from 'src/core/usuario/usuario-view/usuario-view.component';

const routes: Routes = [
{
  path: '',
  redirectTo: 'mapa',
  pathMatch: 'full'
},
{
  path: 'cadastro',
  children: [
    {
      path: '',
      component: CadastroListComponent
    },
    {
      path: 'view',
      component: CadastroViewComponent
    },
  ],
},

{
  path: 'formulario',
  children: [
    {
      path: '',
      component: FormularioListComponent
    },
    {
      path: 'view',
      component: FormularioViewComponent
    },
  ],
},

{
  path: 'categoria',
  children: [
    {
      path: '',
      component: CategoriaListComponent
    },
    {
      path: 'view',
      component: CategoriaViewComponent
    },
  ],
},
{
  path: 'usuario',
  children: [
    {
      path: '',
      component: UsuarioListComponent
    },
    {
      path: 'view',
      component: UsuarioViewComponent
    },
  ],
},

{
  path: 'mapa',
  children: [
    {
      path: '',
      component: MapaViewComponent
    },

]
},
{
  path: 'auth',
  children: [
    {
      path: '',
      component: AcessoComponent
    },

]
},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
