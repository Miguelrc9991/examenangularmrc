import { Component, OnInit ,Input,Output, EventEmitter, ViewChild, ElementRef  } from '@angular/core';
import { ActivatedRoute, Params ,Router} from '@angular/router';
import { Genero } from 'src/app/models/Generos';
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
  public genero! : string
  public nacionalidad! : string
  public generos! : Array<Genero>


  constructor(private _route :ActivatedRoute, private _service : ServicePeliculas, private _router : Router) { }
  @ViewChild('selectGenero') selectGenero! : ElementRef;

  ngOnInit(): void {
    this._route.params.subscribe((params : Params) => {
      var id = params['idPelicula'];
      console.log(id);
      console.log("hola");

      this.idPelicula = id;
      console.log(id);
      this.cargarPelicula();
      this.cargarGeneros();
    });
  }
  cargarPelicula(){
    this._service.getDetalles(this.idPelicula).subscribe(res=>{
      this.pelicula=res
      this.cargarGenero()
      this.cargarNacionalidad()
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

  cargarGenero(){
    var idGeneroo = this.pelicula.idGenero.toString()
    this._service.getNGenero(idGeneroo).subscribe(res=> {
      this.genero = res.nombre
      console.log(res.nombre)

    })
  }

  cargarNacionalidad(){
    var idNacio = this.pelicula.idNacionalidad.toString()
    this._service.getNNacionalidad(idNacio).subscribe(res=> {
      this.nacionalidad = res.nombre
      console.log(res)


    })
  }
  cargarGeneros(){
    this._service.getGeneros().subscribe(res=>{
      this.generos = res
      console.log(res)
    })
      }
      cambiarGenero(){
        var genero = this.selectGenero.nativeElement.value;
        this.pelicula.idPelicula
        this._service.cambiarGenero(this.pelicula.idPelicula,genero).subscribe(res=>{
          console.log(res)
          this.cargarPelicula()
        })

      }
  

}
