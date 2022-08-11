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
    InicioScreenComponent
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
