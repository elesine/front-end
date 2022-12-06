import { Coordenada } from './../../utilidades/mapa/coordenada';
import { cineCreacionDTO } from './../cine';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent {

  form: FormGroup;
  @Input() modelo: cineCreacionDTO;
  @Output() guardarCambios: EventEmitter<cineCreacionDTO>;

  coordenadaInicial: Coordenada[] = [];

  constructor(private FormBuilder: FormBuilder) {
    this.guardarCambios =  new EventEmitter<cineCreacionDTO>();
  }

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      nombre: ['',{Validators: [Validators.required]}],
      latitud: ['',{Validators: [Validators.required]}],
      longitud: ['',{Validators: [Validators.required]}]
    });

    if(this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
      this.coordenadaInicial.push({latitud: this.modelo.latitud, longitud: this.modelo.longitud});
    }
  }

  OnSubmit() {
    this.guardarCambios.emit(this.form.value);
  }

  coordenadaSeleccionada(coordenada: Coordenada){
    this.form.patchValue(coordenada);

  }

}
