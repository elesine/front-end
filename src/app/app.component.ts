import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front-end';
  peliculas: Array<any>;

  ngOnInit(): void {

    setTimeout( ()=> {
      // this.peliculas = [{
      //   titulo: 'spider-man',
      //   fechaLanzamiento: new Date(),
      //   precio: 1400
      // },{
      //   titulo: 'Moana',
      //   fechaLanzamiento: new Date('2016-11-14'),
      //   precio: 300.99
      // }]
      this.peliculas = [];
    },3000);

  }
}
