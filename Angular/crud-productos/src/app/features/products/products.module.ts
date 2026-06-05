import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductPagesComponent } from './pages/product-pages/product-pages.component';



@NgModule({
  declarations: [
    ProductFormComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductPagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductPagesComponent
  ]
})
export class ProductsModule { }
