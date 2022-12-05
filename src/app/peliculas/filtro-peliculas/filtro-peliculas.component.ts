import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css'],
})
export class FiltroPeliculasComponent {
  form: FormGroup;

  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Terror' },
    { id: 3, nombre: 'Comedia' },
    { id: 4, nombre: 'Anime' }
  ];

  peliculasOriginal;

  peliculas = [
    {
      titulo: 'Minions',
      generos: [3],
      proximosEstrenos: true,
      enCines: false,
      poster:
        'https://dx35vtwkllhj9.cloudfront.net/universalstudios/minions-the-rise-of-gru/images/regions/us/onesheet.jpg',
    },
    {
      titulo: 'Harry Potter',
      generos: [1],
      proximosEstrenos: false,
      enCines: true,
      poster:
        'https://i.pinimg.com/originals/fe/7d/48/fe7d4817400bce59bb98ff3c94c8475d.jpg',
    },
    {
      titulo: 'La sirenita',
      generos: [3, 4],
      proximosEstrenos: false,
      enCines: false,
      poster:
        'https://es.web.img2.acsta.net/medias/nmedia/18/80/56/45/19549127.jpg',
    },
  ];

  formularioOriginal = {
    titulo: '',
    generos: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  constructor(private formBuilder: FormBuilder,
              private location: Location,
              private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.peliculasOriginal = this.peliculas;
  }

  ngOnInit(): void {
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);

    this.form.valueChanges.subscribe((valores) => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
      console.log(valores);
      this.escribirParametrosBusquedaEnURL();
    });
  }

  limpiar() {
   this.form.patchValue(this.formularioOriginal);
  }

  buscarPeliculas(valores: any) {
    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(
        (peliculas) => peliculas.titulo.indexOf(valores.titulo) !== -1
      );
    }
    if (valores.generos !== 0) {
      this.peliculas = this.peliculas.filter(
        (peliculas) => peliculas.generos.indexOf(valores.generos) !== -1
      );
    }
    if (valores.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(
        (peliculas) => peliculas.proximosEstrenos
      );
    }
    if (valores.enCines) {
      this.peliculas = this.peliculas.filter(
        (peliculas) => peliculas.enCines
      );
    }
  }

  private escribirParametrosBusquedaEnURL(){
    var queryString = [];
    var valoresFormulario = this.form.value;

    if(valoresFormulario.titulo){
      queryString.push(`titulo=${valoresFormulario.titulo}`);
    }
    if(valoresFormulario.generos){
      queryString.push(`generos=${valoresFormulario.generos}`);
    }
    if(valoresFormulario.proximosEstrenos){
      queryString.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }
    if(valoresFormulario.enCines){
      queryString.push(`enCines=${valoresFormulario.enCines}`);
    }
    this.location.replaceState('peliculas/buscar', queryString.join("&"));
  }

  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe(params => {
      var objeto: any = {};

      if(params.titulo) {
        objeto.titulo = params.titulo;
      }

      if(params.generos) {
        objeto.generos = Number(params.generos);
      }

      if(params.proximosEstrenos) {
        objeto.proximosEstrenos = params.proximosEstrenos;
      }

      if(params.enCines) {
        objeto.enCines = params.enCines;
      }
      this.form.patchValue(objeto);
    });
  }


}

