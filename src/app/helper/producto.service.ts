import { Injectable } from '@angular/core';
import { Producto } from '../clase/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productoAEditar!: Producto;

  constructor() { }
}
