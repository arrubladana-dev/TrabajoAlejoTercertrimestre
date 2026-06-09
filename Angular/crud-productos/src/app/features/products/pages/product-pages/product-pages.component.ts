import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-product-pages',
  standalone: false,
  templateUrl: './product-pages.component.html',
  styleUrl: './product-pages.component.scss'
})
export class ProductPagesComponent {
  @ViewChild(ProductListComponent) private productList?: ProductListComponent;

  onProductoCreado(): void {
    this.productList?.cargarProductos();
  }
}

