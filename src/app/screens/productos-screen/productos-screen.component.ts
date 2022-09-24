import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-productos-screen',
  templateUrl: './productos-screen.component.html',
  styleUrls: ['./productos-screen.component.sass']
})
export class ProductosScreenComponent implements OnInit{

  productos:Producto[] = [
    new Producto("Queso mantecoso","Unidad",40,1,"Calo"),
    new Producto("Jamon","Unidad",25,1,"San Jorge"),
    new Producto("Palta","Kilogramo",50,1,"La feria")
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
      let flagEliminarProducto='flagEliminarProducto';
      let varProducto= window.sessionStorage.getItem(flagEliminarProducto);
      console.log(varProducto);
      if(varProducto!==null){
        let flagEliminar = JSON.parse(varProducto);
        if(varProducto ==="true"){
          this.productos.splice(this.productos.indexOf(producto),1);
          flagEliminar=false;
          window.sessionStorage.setItem(flagEliminarProducto,JSON.stringify(flagEliminar));
        }
      }
    
  }
}
