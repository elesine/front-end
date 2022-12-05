import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

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

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.peliculasOriginal = this.peliculas;
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((valores) => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
      console.log(valores);
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
}
