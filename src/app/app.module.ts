import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './componentes/material/material.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { ModificarProductoComponent } from './componentes/modificar-producto/modificar-producto.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FiltroProductoPipe } from './filtro-producto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    ProductoComponent,
    ListaComponent,
    CategoriaComponent,
    ModificarProductoComponent,
    FiltroProductoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
