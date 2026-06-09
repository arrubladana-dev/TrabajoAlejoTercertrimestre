import { Component, EventEmitter, Output } from '@angular/core';
import { Product, ProducServiceService } from '../../services/produc-service.service';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  nombre: string = '';
  precio: number | null = null;


  @Output() productoCreado = new EventEmitter<Product>();

  constructor(private productService: ProducServiceService) {}

  private limpiarFrormulario(): void {
    this.nombre = '';
    this.precio = null;
  }

  get precioNumero(): number {
    return this.precio ?? 0;
  }

  get nombreValido(): boolean {
    return this.nombre.trim().length > 0;
  }

  get precioValido(): boolean {
    return this.precio !== null && this.precioNumero > 0;
  }

  get puedeGuardar(): boolean {
    return this.nombreValido && this.precioValido;
  }

  onSubmit(): void {
    if (!this.puedeGuardar) return;

    const producto = this.productService.crearProducto(this.nombre.trim(), this.precioNumero);
    this.productoCreado.emit(producto);
    this.limpiarFrormulario();
  }
}



