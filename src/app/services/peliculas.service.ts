import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, retry } from "rxjs";
import { Pelicula } from "../models/Peliculas";
@Injectable()
export class ServicePeliculas{
    constructor(private _http : HttpClient){}


    getGeneros () :Observable<any> {

        var request = "api/generos";
        var url = Global.urlpeliculas+request;
        return this._http.get(url);

    }


    getNacionalidades() :Observable<any> {
        var request = "api/nacionalidades";
        var url = Global.urlpeliculas+request;
        return this._http.get(url);
    }
    getPeliculasG(idGenero :string):Observable<any>{
        var request = "api/peliculas/peliculasgenero/"+idGenero;
        var url = Global.urlpeliculas+request;
        return this._http.get(url);
    }
    getPeliculasN(idNacionalidad: string):Observable<any>{
        var request = "api/peliculas/peliculasnacionalidad/"+idNacionalidad;
        var url = Global.urlpeliculas+request;
        return this._http.get(url);
    }
    getDetalles(idPelicula : string):Observable<any>{
        var request = "api/peliculas/"+idPelicula;
        var url = Global.urlpeliculas+request;
        return this._http.get(url);
        
    }
    deletePelicula(idPelicual : number):Observable<any>{
        var request = "api/peliculas/" + idPelicual;
        var url = Global.urlpeliculas+request;
        return this._http.delete(url);
    }
}