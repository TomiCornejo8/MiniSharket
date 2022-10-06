import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RegistroFinanciero } from 'src/app/models/registroFinanciero.model';
import { RegistroProducto } from 'src/app/models/registroProducto.model';

@Component({
  selector: 'app-carrito-venta',
  templateUrl: './carrito-venta.component.html',
  styleUrls: ['./carrito-venta.component.sass']
})
export class CarritoVentaComponent implements OnInit {
  
  @Input() carrito:RegistroFinanciero;
  @Output() menosProducto = new EventEmitter();

  constructor() { }

  ngOnInit(): void {  }

  restar(producto:RegistroProducto){
    if(producto.cant>0){
      producto.cant--;
      this.carrito.montoTotal -= producto.precio;
    }
  }

  sumar(producto:RegistroProducto){
    if(producto.producto.stock > producto.cant){
      producto.cant++;
      this.carrito.montoTotal += producto.precio;
    } 
  }

  cambiarCantidad(producto:RegistroProducto){
    if(producto.cant <= 0){
      producto.cant = 1;
    }else if(producto.cant>producto.producto.stock){
      producto.cant = producto.producto.stock;
    }
    this.carrito.montoTotal = 0;
    this.carrito.lista.forEach(producto => {
      this.carrito.montoTotal += producto.precio*producto.cant;
    });
  }
  
  eliminar(producto:RegistroProducto){
    this.carrito.montoTotal -= producto.precio*producto.cant;
    producto.producto.banderaCarrito = false;
    this.carrito.lista.splice(this.carrito.lista.indexOf(producto),1);
    this.menosProducto.emit();
  }

  cancelar(){
    let i = 0;
    while(i<this.carrito.lista.length){
      this.eliminar(this.carrito.lista[i]);
    }
    this.carrito.montoTotal = 0;
  }

  subirCompra(){
    //Subir BBDD
    this.cancelar();
  }

}
