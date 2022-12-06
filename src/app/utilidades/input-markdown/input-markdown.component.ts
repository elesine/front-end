import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent {

  contenidoMarkdown = '';

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  inputTextArea(texto: string) {
    console.log(texto);
    this.contenidoMarkdown = texto;
    this.changeMarkdown.emit(texto);
  }
}
