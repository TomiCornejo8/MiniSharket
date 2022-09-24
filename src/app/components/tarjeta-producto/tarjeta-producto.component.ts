import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.sass']
})
export class TarjetaProductoComponent implements OnInit {

  @Output() eliminarProducto = new EventEmitter<Producto>();
  @Input() producto:Producto;

  constructor() { }

  ngOnInit(): void {
  }
  eliminar(){
    let eliminar=this.eliminarProducto;
    let producto=this.producto;
    setTimeout(function emitir(){
      eliminar.emit(producto);
    },2500);
  }

}
