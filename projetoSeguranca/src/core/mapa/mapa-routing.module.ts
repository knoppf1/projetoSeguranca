import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaViewComponent } from './mapa-view/mapa-view.component';

const routes: Routes = [

    {
      path: 'mapa',
      children: [
        {
          path: '',
          component: MapaViewComponent
        }
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapaRoutingModule { }
