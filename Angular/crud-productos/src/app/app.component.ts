import { Component } from '@angular/core';
import { ProductsModule } from './features/products/products.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'servicios2';
}

