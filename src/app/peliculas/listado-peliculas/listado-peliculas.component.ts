import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent {
  title = 'Listado de películas';

  @Input()
  peliculas: Array<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

  remover(index: number): void {
    this.peliculas.splice(index,1);
  }
}
