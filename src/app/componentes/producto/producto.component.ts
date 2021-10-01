import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/clase/producto';
import { ProductoService } from 'src/app/helper/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto!:Producto;
  constructor(private router:Router,private servicio:ProductoService) { }

  ngOnInit(): void {
  }

  mover(){
    this.servicio.productoAEditar = this.producto ;
  this.router.navigateByUrl('modificar');
  }

}
