import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServicePeliculas } from 'src/app/services/peliculas.service';
import { Pelicula } from 'src/app/models/Peliculas';
import { DetallespeliculaComponent } from '../detallespelicula/detallespelicula.component';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public idGenero! : string;
  public idNacionalidad! : string;
  public Peliculas! : Array<Pelicula>;
  public pelicula! : Pelicula
  message!: string;

  constructor(private _route :ActivatedRoute, private _service : ServicePeliculas,) { }

  ngOnInit(): void {
    this._route.params.subscribe((params : Params)=>{
      var idGenero = params['genero']
      var idNacionalidad = params['nacionalidad']
      this.idGenero = idGenero
      this.idNacionalidad=idNacionalidad
      if(idGenero){
        console.log(this.idGenero)
        this.cargarPeliculasG()
      }else if(idNacionalidad){
        console.log(this.idNacionalidad)
        this.cargarPeliculasN()
      }

    })
  }
  cargarPeliculasG(){
    this._service.getPeliculasG(this.idGenero).subscribe(res=>{
      this.Peliculas = res
    })
  }
  cargarPeliculasN(){
    this._service.getPeliculasN(this.idNacionalidad).subscribe(res=>{
      this.Peliculas=res
    })
  }
    cargarDetalles(event : Pelicula)
    {
      this.pelicula = event
  }
  
  
  

}
