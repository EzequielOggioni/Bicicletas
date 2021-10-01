import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { MaterialComponent } from './componentes/material/material.component';
import { ModificarProductoComponent } from './componentes/modificar-producto/modificar-producto.component';

const routes: Routes = [
{ path:'',component:MaterialComponent},
{path:'categorias',component:CategoriaComponent},
{path:'modificar',component:ModificarProductoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
