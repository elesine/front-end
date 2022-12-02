import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input()
  maximoRating: number;
  @Input()
  ratingSeleccionado: number;
  ratingAnterior: number;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();

  maximoRatingArr: Array<any>;
  votado: boolean;

  constructor() {
    this.maximoRating = 5;
    this.ratingAnterior = 0;
    this.ratingSeleccionado = 0;
    this.maximoRatingArr = [];
    this.votado = false;
  }

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index: number): void {
    this.ratingSeleccionado = index + 1;
  }

  manejarMouseLeave(): void {
    if(this.ratingAnterior !== 0) {
      this.ratingSeleccionado = this.ratingAnterior;
    }else {
      this.ratingSeleccionado = 0;
    }
  }

  rate(index: number): void {
    this.ratingSeleccionado = index + 1;
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }
}
