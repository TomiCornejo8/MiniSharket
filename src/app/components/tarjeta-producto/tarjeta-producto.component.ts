import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.sass']
})
export class TarjetaProductoComponent implements OnInit,OnChanges {

  @Output() eliminarProducto = new EventEmitter<Producto>();
  @Output() agregarCarrito = new EventEmitter<Producto>();
  @Output() editarProductoFlag = new EventEmitter<Producto>();
  @Output() productoPresionoBoton = new EventEmitter<Producto>();
  @Input() respuestaEliminar:boolean;
  @Input() producto:Producto;
  @Input() productoEditar:any;
  editar=false;
  eliminarP=false;
  w=window.sessionStorage;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.editar===true){
        this.producto=changes["productoEditar"].currentValue;
        this.editar=false
    }
    if(this.eliminarP===true){
      if(changes["respuestaEliminar"].currentValue === true ){
        console.log("Tarjeta productos ===>",this.producto)
        this.eliminarProducto.emit(this.producto)
        this.eliminarP=false;
      }
      
  }
  this.eliminarP=false;
  }

  ngOnInit(): void {
  }
  /*
  eliminar(respuesta:any){
    if(respuesta)this.eliminarProducto.emit(this.producto)
  }*/

  editarProducto(){
    this.editarProductoFlag.emit(this.producto);
    this.editar=true;
  }

  agregar(){
    this.agregarCarrito.emit(this.producto);
    this.producto.banderaCarrito = true;
  }
  eliminar(){
    this.eliminarP=true
    this.productoPresionoBoton.emit(this.producto);
  }
}
