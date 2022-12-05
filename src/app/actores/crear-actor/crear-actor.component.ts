import { actorCreacionDTO } from './../actor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent {

  guardarCambios(actor: actorCreacionDTO){
    console.log('actor',actor);
  }
}
