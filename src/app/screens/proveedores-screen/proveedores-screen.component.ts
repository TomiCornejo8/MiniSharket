import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';

@Component({
  selector: 'app-proveedores-screen',
  templateUrl: './proveedores-screen.component.html',
  styleUrls: ['./proveedores-screen.component.sass']
})
export class ProveedoresScreenComponent implements OnInit {

  proveedores:Proveedor[] =[
    new Proveedor("Don juanito",["Donjuanito@mail.com"],["+569124141"]),
    new Proveedor("Donsella",["Donsella@mail.com"],["+569123512"]),
    new Proveedor("Verdureria",["Verdureria@mail.com"],["+569452354"]),
  ];

  constructor() { }

  crearProveedor(proveedor:Proveedor){
    this.proveedores.push(proveedor);
  }

  eliminarProveedor(proveedor:Proveedor){
    this.proveedores.splice(this.proveedores.indexOf(proveedor),1);
  }
  ngOnInit(): void {
  }

}
