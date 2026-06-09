import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../services/produc-service.service';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() producto: Product = new Product(0, '', 0);

}



