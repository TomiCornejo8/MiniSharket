import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoUsuarioComponent } from './components/info-usuario/info-usuario.component';
import { ProductosScreenComponent } from './screens/productos-screen/productos-screen.component';
import { ProveedoresScreenComponent } from './screens/proveedores-screen/proveedores-screen.component';
import { IngresoScreenComponent } from './screens/ingreso-screen/ingreso-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { FormsModule } from '@angular/forms';
import { TarjetaProductoComponent } from './components/tarjeta-producto/tarjeta-producto.component';
import { FiltroProductosComponent } from './components/filtro-productos/filtro-productos.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { CarritoVentaComponent } from './components/carrito-venta/carrito-venta.component';
import { TarjetaProveedorComponent } from './components/tarjeta-proveedor/tarjeta-proveedor.component';
// import { FiltroProveedoresComponent } from './components/filtro-proveedores/filtro-proveedores.component';
import { ListaInsumoComponent } from './components/lista-insumo/lista-insumo.component';
import { RevisarCredencialComponent } from './components/revisar-credencial/revisar-credencial.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { AdvertenciaComponent } from './components/advertencia/advertencia.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { CrearCategoriaComponent } from './components/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './components/editar-categoria/editar-categoria.component';
import { CrearProveedorComponent } from './components/crear-proveedor/crear-proveedor.component';
import { FinanzasScreenComponent } from './screens/finanzas-screen/finanzas-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoUsuarioComponent,
    ProductosScreenComponent,
    ProveedoresScreenComponent,
    IngresoScreenComponent,
    RegistroScreenComponent,
    InicioScreenComponent,
    TarjetaProductoComponent,
    FiltroProductosComponent,
    CategoriaComponent,
    CarritoVentaComponent,
    TarjetaProveedorComponent,
    ListaInsumoComponent,
    RevisarCredencialComponent,
    EditarUsuarioComponent,
    AdvertenciaComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent,
    CrearProveedorComponent,
    FinanzasScreenComponent
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
