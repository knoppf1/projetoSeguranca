import { AcessoModule } from './../core/acesso/acesso.module';
import { CategoriaModule } from './../core/categoria/categoria.module';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroModule } from 'src/core/cadastro/cadastro.module';
import { MapaModule } from 'src/core/mapa/mapa.module';
import { AgmCoreModule } from '@agm/core';
import { FormularioModule } from 'src/core/formulario/formulario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyDrCpM0yGH_iMvBFna1gU1voQR-I7PGUgQ'

    }),
    MapaModule,
    CadastroModule,
    FormularioModule,
    CategoriaModule,
    AcessoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
