import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  modelo: generoCreacionDTO = {nombre: 'Drama'};

  constructor(private router: Router ,private activatedRoute: ActivatedRoute ){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      alert(params.id);
    })
  }

  guardarCambios(genero: generoCreacionDTO){
    //...Guardar cambios
    console.log('genero', genero);
    this.router.navigate(['/generos']);
  }

}
