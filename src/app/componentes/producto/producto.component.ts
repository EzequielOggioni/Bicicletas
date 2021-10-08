import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/clase/categoria';
import { Producto } from 'src/app/clase/producto';
import { ProductoService } from 'src/app/helper/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto!: Producto;
  @Output() EliminarProducto = new EventEmitter();
  constructor(private router: Router, private servicio: ProductoService) { }

  ngOnInit(): void {
  }

  modificar() {
    this.servicio.productoAEditar = this.producto;
    this.router.navigateByUrl('modificar');
  }
  
  eliminar(){
    this.EliminarProducto.emit(this.producto);    
  }
  

}
