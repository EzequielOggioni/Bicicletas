import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clase/producto';
import { ProductoService } from 'src/app/helper/producto.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  producto!: Producto;
  constructor(private servicio:ProductoService) {
    
  }
  ngOnInit(): void {
    this.producto = this.servicio.productoAEditar;
  }

}
