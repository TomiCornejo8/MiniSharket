import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-productos-screen',
  templateUrl: './productos-screen.component.html',
  styleUrls: ['./productos-screen.component.sass']
})
export class ProductosScreenComponent implements OnInit {

  productos:Producto[] = [
    new Producto("Queso mantecoso","Unidades",40,1,600,"Calo"),
    new Producto("Jamon","Unidades",25,1,600,"San Jorge"),
    new Producto("Palta","Kilogramos",50,1,1000000,"La feria")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  crearProducto(producto:Producto){
    this.productos.push(producto);
  }

  //indexof: devuelve la posición del elemento entregado
  //splice: elimina un elemento desde el primer parametro hasta el segundo parametro
  eliminarProducto(producto:Producto){
    this.productos.splice(this.productos.indexOf(producto),1);
  }
}
