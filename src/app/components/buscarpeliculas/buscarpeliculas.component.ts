import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServicePeliculas } from 'src/app/services/peliculas.service';
import { Pelicula } from 'src/app/models/Peliculas';
@Component({
  selector: 'app-buscarpeliculas',
  templateUrl: './buscarpeliculas.component.html',
  styleUrls: ['./buscarpeliculas.component.css']
})
export class BuscarpeliculasComponent implements OnInit {
  public peliculas! : Array<Pelicula>
  public valor! : string
  constructor(private _route :ActivatedRoute, private _service : ServicePeliculas) { }

  ngOnInit(): void {
    this._route.params.subscribe((params : Params) => {
      this.valor = params['titulo'];
      this.cargarPeliculas();
    });
  }
  cargarPeliculas(){
    this._service.buscarPeliculas(this.valor).subscribe(res=>{
      this.peliculas = res
    })
  }

}
