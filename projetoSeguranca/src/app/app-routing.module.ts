import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroListComponent } from 'src/core/cadastro/cadastro-list/cadastro-list.component';
import { CadastroViewComponent } from 'src/core/cadastro/cadastro-view/cadastro-view.component';
import { MapaViewComponent } from 'src/core/mapa/mapa-view/mapa-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
},
{
  path: 'list',
  children: [
    {
      path: '',
      component: CadastroListComponent
    },
  ],
},
{
  path: 'view',
  children: [
    {
      path: '',
      component: CadastroViewComponent
    },

]
},
{
  path: 'mapa',
  children: [
    {
      path: '',
      component: MapaViewComponent
    },

]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
