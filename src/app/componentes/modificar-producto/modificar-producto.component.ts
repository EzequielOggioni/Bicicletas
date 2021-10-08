import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/clase/producto';
import { ProductoService } from 'src/app/helper/producto.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  producto!: Producto;
  @Output() ProductoGuardado = new EventEmitter();

  constructor(private servicio: ProductoService) {

  }
  ngOnInit(): void {
    this.producto = this.servicio.productoAEditar;
  }

  Guardar() {
    this.ProductoGuardado.emit();
  }

}
