import { Component } from '@angular/core';

@Component({
  selector: 'app-cuadro',
  standalone: false,
  templateUrl: './cuadro.html',
  styleUrl: './cuadro.scss',
})
export class Cuadro {
  variable = "blanco"

  colorRojo(){
    this.variable = "red"
  }

  colorAzul(){
    this.variable = "blue"
  }
  colorRosa(){
    this.variable = "pink"
  }
  colorMorado(){
    this.variable = "purple"
  }
}
