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
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBwiUbgM25L_ICMssYLnHmfvosCiB54LwI'

    })
  ]
})
export class MapaModule { }
