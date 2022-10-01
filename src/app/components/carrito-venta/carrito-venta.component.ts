import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-carrito-venta',
  templateUrl: './carrito-venta.component.html',
  styleUrls: ['./carrito-venta.component.sass']
})
export class CarritoVentaComponent implements OnInit {
  
  @Input() carrito:Producto[];
  montoTotal=0;

  constructor() { }

  ngOnInit(): void {
  }

  eliminarColaProducto(producto:Producto){
    producto.banderaCarrito = false;
    this.carrito.splice(this.carrito.indexOf(producto),1)
  }

}
