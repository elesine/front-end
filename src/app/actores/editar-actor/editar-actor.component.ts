import { actorCreacionDTO, actorDTO } from './../actor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  modelo: actorDTO = {nombre: 'felipe', fechaNacimiento: new Date(), foto: "https://static.wikia.nocookie.net/marvelfanon/images/4/49/Hulk_SMASH.png/revision/latest?cb=20170513133827&path-prefix=es"}

  constructor(private activatedRoute: ActivatedRoute ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      alert(params.id);
    })
  }

  guardarCambios(actor: actorCreacionDTO) {
    console.log(actor);
  }
}
