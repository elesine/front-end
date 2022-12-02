import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front-end';
  peliculasEnCines: Array<any>;

  peliculasProximosEstrenos: Array<any>;


  constructor() {
    this.peliculasEnCines =[{
      titulo: 'Harry Potter',
      fechaLanzamiento: new Date(),
      precio: 2000
    },{
      titulo: 'La momia',
      fechaLanzamiento: new Date('2018-11-14'),
      precio: 3020.99
    },{
      titulo: 'Minions',
      fechaLanzamiento: new Date('2016-11-14'),
      precio: 3090.99
    }];
    // this.peliculasEnCines = [];
  }

  ngOnInit(): void {
    setTimeout( ()=> {
      this.peliculasProximosEstrenos =[{
        titulo: 'spider-man',
        fechaLanzamiento: new Date(),
        precio: 400
      },{
        titulo: 'Moana',
        fechaLanzamiento: new Date('2022-11-14'),
        precio: 300.99
      },{
        titulo: 'spider-man',
        fechaLanzamiento: new Date(),
        precio: 400
      },{
        titulo: 'Moana',
        fechaLanzamiento: new Date('2022-11-14'),
        precio: 300.99
      },{
        titulo: 'spider-man',
        fechaLanzamiento: new Date(),
        precio: 400
      },{
        titulo: 'Moana',
        fechaLanzamiento: new Date('2022-11-14'),
        precio: 300.99
      },{
        titulo: 'spider-man',
        fechaLanzamiento: new Date(),
        precio: 400
      },{
        titulo: 'Moana',
        fechaLanzamiento: new Date('2022-11-14'),
        precio: 300.99
      }];
    },3000);
  }

  manejarRated(voto: number): void{
    alert(voto);
  }
}


