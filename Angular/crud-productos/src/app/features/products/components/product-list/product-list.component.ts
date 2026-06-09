import { Component } from '@angular/core';
import { Product, ProducServiceService } from '../../services/produc-service.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent  {
  productos: Product[] = [];

  // constructor(private productService: ProducServiceService) {}
  constructor(private productService: ProducServiceService) {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productos = this.productService.getProductos();
  }

}



