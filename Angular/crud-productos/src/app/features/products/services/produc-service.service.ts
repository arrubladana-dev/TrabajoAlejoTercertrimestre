import { Injectable } from '@angular/core';

export class Product {
  id: number;
  nombre: string;
  precio: number;

  constructor(id: number, nombre: string, precio: number) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProducServiceService {

  private productos: Product[] = [];
  private nextId: number = 1;

  getProductos(): Product[] {
    return this.productos;
  }

  obtenerProductoPorId(id: number): Product | undefined {
    return this.productos.find(p => p.id === id);
  }

  crearProducto(nombre: string, precio: number): Product {
    const nuevo = new Product(this.nextId, nombre, precio);
    this.nextId++;
    this.productos.push(nuevo);
    return nuevo;
  }

  eliminarProducto(id: number): void {

  for (let i = 0; i < this.productos.length; i++) {

    if (this.productos[i].id === id) {

      this.productos.splice(i, 1);

      break;
    }

  }

}

  actualizarProducto(productoActualizado: Product): void {

  for (let i = 0; i < this.productos.length; i++) {

    if (this.productos[i].id === productoActualizado.id) {

      this.productos[i] = productoActualizado;

      break;
    }

  }

}
}
