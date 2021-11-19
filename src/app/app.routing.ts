import { Routes,  RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { DetallespeliculaComponent } from "./components/detallespelicula/detallespelicula.component";
import { ModificarpeliculaComponent } from "./components/modificarpelicula/modificarpelicula.component";
import { BuscarpeliculasComponent } from "./components/buscarpeliculas/buscarpeliculas.component";
const appRoutes : Routes = [
    {path:"", component : HomeComponent},
    {path:"home", component : HomeComponent},
    {path:"peliculas/:genero", component : PeliculasComponent},
    {path:"peliculas/:nacionalidad", component : PeliculasComponent},
    {path:"pelicula/:idPelicula", component : DetallespeliculaComponent},
    {path:"modificar/:idPelicula", component : ModificarpeliculaComponent},
    {path:"buscarpeliculas/:titulo", component : BuscarpeliculasComponent},



]
export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);