import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-boton',
  standalone: false,
  templateUrl: './boton.html',
  styleUrl: './boton.scss',
})
export class Boton {
  @Input() text: string = '';
  @Output() salida = new EventEmitter();

  onClick() {
    this.salida.emit();
  }
}
