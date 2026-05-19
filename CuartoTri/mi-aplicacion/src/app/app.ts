import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mi-aplicacion');
  variable = "balnco"

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
