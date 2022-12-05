import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css'],
})
export class CrearGeneroComponent  {
  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  guardarCambios(genero: generoCreacionDTO){
    //...Guardar cambios
    console.log('genero', genero);
    this.router.navigate(['/generos']);
  }


}
