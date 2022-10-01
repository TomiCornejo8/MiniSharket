import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-carrito-venta',
  templateUrl: './carrito-venta.component.html',
  styleUrls: ['./carrito-venta.component.sass']
})
export class CarritoVentaComponent implements OnInit {
  @Output() restarCantidad = new EventEmitter();
  @Input() carrito:Producto[];
  montoTotal=0;

  constructor() { }

  ngOnInit(): void {
  }

  eliminarColaProducto(producto:Producto){
    producto.banderaCarrito = false;
    this.carrito.splice(this.carrito.indexOf(producto),1);
    this.restarCantidad.emit();
  }

}
