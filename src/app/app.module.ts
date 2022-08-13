import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoUsuarioComponent } from './components/info-usuario/info-usuario.component';
import { ProductosScreenComponent } from './screens/productos-screen/productos-screen.component';
import { ProveedoresScreenComponent } from './screens/proveedores-screen/proveedores-screen.component';
import { VentasScreenComponent } from './screens/ventas-screen/ventas-screen.component';
import { GastosScreenComponent } from './screens/gastos-screen/gastos-screen.component';
import { IngresoScreenComponent } from './screens/ingreso-screen/ingreso-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { FormsModule } from '@angular/forms';
import { TarjetaProductoComponent } from './components/tarjeta-producto/tarjeta-producto.component';
import { FiltroProductosComponent } from './components/filtro-productos/filtro-productos.component';
import { CategoriaProductoComponent } from './components/categoria-producto/categoria-producto.component';
import { CarritoVentaComponent } from './components/carrito-venta/carrito-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoUsuarioComponent,
    ProductosScreenComponent,
    ProveedoresScreenComponent,
    VentasScreenComponent,
    GastosScreenComponent,
    IngresoScreenComponent,
    RegistroScreenComponent,
    InicioScreenComponent,
    TarjetaProductoComponent,
    FiltroProductosComponent,
    CategoriaProductoComponent,
    CarritoVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
