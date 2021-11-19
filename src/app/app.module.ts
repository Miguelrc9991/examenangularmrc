import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProviders, routing } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ServicePeliculas } from './services/peliculas.service';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { DetallespeliculaComponent } from './components/detallespelicula/detallespelicula.component';
import { NuevogeneroComponent } from './components/nuevogenero/nuevogenero.component';
import { NuevanacionalidadComponent } from './components/nuevanacionalidad/nuevanacionalidad.component';
import { ModificarpeliculaComponent } from './components/modificarpelicula/modificarpelicula.component';
import { BuscarpeliculasComponent } from './components/buscarpeliculas/buscarpeliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PeliculasComponent,
    DetallespeliculaComponent,
    NuevogeneroComponent,
    NuevanacionalidadComponent,
    ModificarpeliculaComponent,
    BuscarpeliculasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders,ServicePeliculas],
  bootstrap: [AppComponent]
})
export class AppModule { }
