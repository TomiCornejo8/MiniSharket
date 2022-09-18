import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosScreenComponent } from './screens/gastos-screen/gastos-screen.component';
import { IngresoScreenComponent } from './screens/ingreso-screen/ingreso-screen.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { ProductosScreenComponent } from './screens/productos-screen/productos-screen.component';
import { ProveedoresScreenComponent } from './screens/proveedores-screen/proveedores-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { VentasScreenComponent } from './screens/ventas-screen/ventas-screen.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component:InicioScreenComponent},

  {path:'productos', component:ProductosScreenComponent},
  {path:'proveedores', component:ProveedoresScreenComponent},
  {path:'ventas', component:VentasScreenComponent},
  {path:'gastos', component:GastosScreenComponent},

  {path:'ingreso', component:IngresoScreenComponent},
  {path:'registro', component:RegistroScreenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }