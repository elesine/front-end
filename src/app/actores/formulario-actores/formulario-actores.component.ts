import { actorCreacionDTO } from './../actor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent {
  form: FormGroup;

  @Output()
  submit: EventEmitter<actorCreacionDTO>;

  @Input() modelo: actorCreacionDTO;

  constructor(private FormBuilder: FormBuilder) {
    this.submit = new EventEmitter<actorCreacionDTO>;

  }

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      nombre: ['',{validators: [Validators.required],
      }],
      fechaNacimiento: '',
      foto: ''
    });

    if(this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }

  onSubmit() {
    this.submit.emit(this.form.value);
  }

  archivoSeleccionado(file) {
    this.form.get('foto').setValue(file);
  }
}
