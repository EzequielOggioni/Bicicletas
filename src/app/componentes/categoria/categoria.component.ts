import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/clase/categoria';
import { ProductoService } from 'src/app/helper/producto.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

 categorias: Categoria[]=[];
  categoriaSeleccionada: Categoria= {nombre:"",productos:[]};
  constructor( private serv:ProductoService) {
  }
  
  ngOnInit(): void {
    //#region harcodeo
        let categorias = this.serv.categorias;
     
          
          this.categorias = categorias;
          //#endregion
  }

}
