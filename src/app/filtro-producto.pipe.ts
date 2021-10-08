import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from './clase/producto';

@Pipe({
  name: 'filtroProducto'
})
export class FiltroProductoPipe implements PipeTransform {

  transform(value: Producto[], filtro: string): Producto[] {
    if((filtro??"")=="")
        return value;
    return value.filter(p=> p.descripcion.toLowerCase().indexOf(filtro.toLowerCase()) > -1 || p.nombre.toLowerCase().indexOf(filtro.toLowerCase()) > -1 )
      
  }

}
