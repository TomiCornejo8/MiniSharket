import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { RegistroFinanciero } from 'src/app/models/registroFinanciero.model';
import { RegistroProducto } from 'src/app/models/registroProducto.model';

@Component({
  selector: 'app-productos-screen',
  templateUrl: './productos-screen.component.html',
  styleUrls: ['./productos-screen.component.sass']
})
export class ProductosScreenComponent implements OnInit{

  w=window.sessionStorage;
  productos:Producto[] = [
    new Producto("Queso mantecoso","Unidad",40,1,"Calo"),
    new Producto("Jamon","Unidad",25,1,"San Jorge"),
    new Producto("Palta","Kilogramo",50,1,"La feria")
  ];

  carrito:RegistroFinanciero = new RegistroFinanciero("Venta");
  cant:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  crearProducto(producto:Producto){
    this.productos.push(producto);
    this.w.setItem("arrayProductos",JSON.stringify(this.productos));
  }

  //indexof: devuelve la posición del elemento entregado
  //splice: elimina un elemento desde el primer parametro hasta el segundo parametro
  eliminarProducto(producto:Producto){
      let stringEliminarProducto='flagEliminarProducto';
      let flagEliminarProducto= this.w.getItem(stringEliminarProducto);
      console.log(flagEliminarProducto);
      if(flagEliminarProducto!==null){
        let flagEliminar = JSON.parse(flagEliminarProducto);
        if(flagEliminarProducto ==="true"){
          this.productos.splice(this.productos.indexOf(producto),1);
          flagEliminar=false;
          this.w.setItem(stringEliminarProducto,JSON.stringify(flagEliminar));
        }
      }
    
  }

  agregarCarrito(producto:Producto){
    this.carrito.lista.push(new RegistroProducto(1,producto.nombre,producto.precio,producto.unidad,producto));
    this.carrito.montoTotal += producto.precio;
    this.cant++;
  }

  quitarCarrito(){
    this.cant--;
  }
}
