import { Component, OnInit ,Input,Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute, Params ,Router} from '@angular/router';
import { Pelicula } from 'src/app/models/Peliculas';
import { ServicePeliculas } from 'src/app/services/peliculas.service';
import { PeliculasComponent } from '../peliculas/peliculas.component';
@Component({
  selector: 'app-detallespelicula',
  templateUrl: './detallespelicula.component.html',
  styleUrls: ['./detallespelicula.component.css']
})
export class DetallespeliculaComponent implements OnInit {
  @Input() peli! : Pelicula;
  @Input() index! : number;
  public pelicula! : Pelicula
  public idPelicula! : string
  constructor(private _route :ActivatedRoute, private _service : ServicePeliculas, private _router : Router) { }

  ngOnInit(): void {
    this._route.params.subscribe((params : Params) => {
      var id = params['idPelicula'];
      console.log(id);
      console.log("hola");

      this.idPelicula = id;
      console.log(id);
      this.cargarPelicula();
    });
  }
  cargarPelicula(){
    this._service.getDetalles(this.idPelicula).subscribe(res=>{
      this.pelicula=res
    })
  }
  eliminarPelicula(){
    var id = this.pelicula.idPelicula
    this._service.deletePelicula(id).subscribe(res=>{
      this._router.navigate(["/"])
    })
  }
  recogerPelicula(pelicula : Pelicula){
    this.pelicula=pelicula
  }
  

}
