import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-cola-producto',
  templateUrl: './cola-producto.component.html',
  styleUrls: ['./cola-producto.component.sass']
})
export class ColaProductoComponent implements OnInit {

  @Input() producto:Producto;
  @Output() eliminarColaProducto = new EventEmitter<Producto>;
  cantidadProducto:number=1;

  constructor() { }

  ngOnInit(): void {

  }

  restar(){
    if(this.cantidadProducto>0)this.cantidadProducto--;
  }
  sumar(){
    this.cantidadProducto++;
  }
  cambiarCantidad(nuevaCantidadProducto:string){
    let numbernuevaCantidadProducto=Number.parseInt(nuevaCantidadProducto);
    if(numbernuevaCantidadProducto>0)this.cantidadProducto=numbernuevaCantidadProducto;
  }
  
  eliminar(){
    this.eliminarColaProducto.emit(this.producto);
  }
}
