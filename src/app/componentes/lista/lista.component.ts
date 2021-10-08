import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/clase/producto';
import { ProductoService } from 'src/app/helper/producto.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() productos!: Producto[];
  miFltro!:string;
  nuevo:boolean;

  constructor(private ser :ProductoService ) {
  this.nuevo = false; 
  }


  ngOnInit(): void {
  }

  nuevoProducto(){
    this.nuevo= true;
    this.ser.productoAEditar = new Producto();
  }

  agregar(){
    this.productos.push(this.ser.productoAEditar);
    this.nuevo= false;

  }

  quitarDeLista(producto:Producto){
    this.productos.splice(this.productos.indexOf(producto),1);
  }
}
