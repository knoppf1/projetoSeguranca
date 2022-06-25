import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';


import { MapaRoutingModule } from './mapa-routing.module';
import { MapaViewComponent } from './mapa-view/mapa-view.component';


@NgModule({
  declarations: [
    MapaViewComponent
  ],
  imports: [
    CommonModule,
    MapaRoutingModule,
    AgmCoreModule,
  ]
})
export class MapaModule { }
