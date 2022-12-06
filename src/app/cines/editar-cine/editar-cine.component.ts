import { cineCreacionDTO, cineDTO } from './../cine';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  modelo: cineDTO;

  constructor(private activatedRoute: ActivatedRoute ){
    this.modelo = {nombre: "Cineplanet", latitud: -12.069646334293447, longitud: -77.03591823577882};
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      alert(params.id);
    })
  }

  guardarCambios(cine: cineCreacionDTO){
    console.log('data cine', cine);
  }

}
