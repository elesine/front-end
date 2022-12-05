import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent {
  form: FormGroup;
  @Input() modelo: generoCreacionDTO;
  
  @Output()
  submit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  constructor( private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      nombre: ['Jorge Peréz', {
        validators: [Validators.required,
                     Validators.minLength(5),
                     primeraLetraMayuscula()]
      }]
    });
    if( this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }

  }

  guardarCambios() {  
    this.submit.emit(this.form.value);
  }

  obtenerErrorCampoNombre() {
    var campo = this.form.get('nombre');
    if (campo.hasError('required')){
      return 'El campo nombre es requerido';
    }
    if (campo.hasError('minlength')) {
      return 'La longitud mínima es de 5 ';
    }
    if (campo.hasError('primeraLetraMayuscula')) {
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return;
  }
}
