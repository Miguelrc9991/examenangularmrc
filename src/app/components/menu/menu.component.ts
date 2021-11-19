import { Component, OnInit } from '@angular/core';
import { ServicePeliculas } from 'src/app/services/peliculas.service';
import { Pelicula } from 'src/app/models/Peliculas';
import { Router } from '@angular/router';
import { Genero } from 'src/app/models/Generos';
import { Nacionalidad } from 'src/app/models/Nacionalidades';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public generos! : Array<Genero>
  public nacionalidades! : Array<Nacionalidad>

  constructor(private _service : ServicePeliculas,  private _router : Router) { }

  ngOnInit(): void {
this.cargarGeneros()
this.cargarNacionalidades()
  }
  cargarGeneros(){
this._service.getGeneros().subscribe(res=>{
  this.generos = res
  console.log(res)
})
  }
  cargarNacionalidades(){
    this._service.getNacionalidades().subscribe(res=>{
      this.nacionalidades = res
      console.log(res)
    })

  }

}
