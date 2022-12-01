import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit{

  @Input()
  maximoRating: number;
  @Input()
  ratingSeleccionado: number;

  maximoRatingArr: Array<any>;

  constructor() {
    this.maximoRating = 5;
    this.ratingSeleccionado = 0;
    this.maximoRatingArr = [];
  }

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index: number): void {
    this.ratingSeleccionado = index + 1;
  }

  manejarMouseLeave(): void {
    this.ratingSeleccionado = 0;
  }

}
