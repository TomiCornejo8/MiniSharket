import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import { RegistroFinanciero } from 'src/app/models/registroFinanciero.model';
import { RegistroProducto } from 'src/app/models/registroProducto.model';
import { Unidad } from 'src/app/models/unidad.model';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';
import { RegistroFinancieroService } from 'src/app/services/registroFinanciero/registro-financiero.service';
import { RegistroProductoService } from 'src/app/services/registroProducto/registro-producto.service';
import { UnidadService } from 'src/app/services/unidad/unidad.service';

@Component({
  selector: 'app-carrito-venta',
  templateUrl: './carrito-venta.component.html',
  styleUrls: ['./carrito-venta.component.sass']
})
export class CarritoVentaComponent implements OnInit {

  @Input() carrito: RegistroFinanciero;
  @Output() menosProducto = new EventEmitter();
  unidades:Unidad[];

  constructor(private productoService: ProductoService,
    private registroFService: RegistroFinancieroService,
    private registroPService: RegistroProductoService,
    private unidadService:UnidadService) { }

  ngOnInit(): void {
    this.unidadService.list().subscribe(data=>{
      this.unidades = (data as Unidad[]);
    });
  }

  restar(producto: RegistroProducto) {
    if (producto.cantidad > 0) {
      producto.cantidad--;
      this.carrito.montoTotal -= producto.precio;
    }
  }

  sumar(producto: RegistroProducto) {
    if (producto.producto.stock > producto.cantidad) {
      producto.cantidad++;
      this.carrito.montoTotal += producto.precio;
    }
  }

  cambiarCantidad(producto: RegistroProducto) {
    if (producto.cantidad <= 0) {
      producto.cantidad = 1;
    } else if (producto.cantidad > producto.producto.stock) {
      producto.cantidad = producto.producto.stock;
    }
    this.carrito.montoTotal = 0;
    this.carrito.lista.forEach(producto => {
      this.carrito.montoTotal += producto.precio * producto.cantidad;
    });
  }

  eliminar(producto: RegistroProducto) {
    this.carrito.montoTotal -= producto.precio * producto.cantidad;
    producto.producto.banderaCarrito = false;
    this.carrito.lista.splice(this.carrito.lista.indexOf(producto), 1);
    this.menosProducto.emit();
  }

  cancelar() {
    let i = 0;
    while (i < this.carrito.lista.length) {
      this.eliminar(this.carrito.lista[i]);
    }
    this.carrito.montoTotal = 0;
  }

  subirCompra() {
    let dataSesion = sessionStorage.getItem('usuario');
    this.carrito.minimarket = JSON.parse(dataSesion || "[]").id;
    this.carrito.tipo = "1";

    this.registroFService.post(this.carrito.tipo, this.carrito.minimarket).subscribe(data => {
      console.log(data);

      let i = 0;
      while (i < this.carrito.lista.length) {
        this.carrito.lista[i].producto.nVentas++;
        this.carrito.lista[i].producto.stock -= this.carrito.lista[i].cantidad;

        if (this.carrito.lista[i].producto.stock != 0) {
          this.carrito.lista[i].producto.banderaCarrito = false;
        }

        this.productoService.putStock(this.carrito.lista[i].producto.stock, this.carrito.lista[i].producto.id).subscribe(data => {
          console.log(data);
        });

        this.unidades.forEach(x =>{
          if(x.unidad == this.carrito.lista[i].unidad) this.carrito.lista[i].unidad = x.id.toString();
        });

        this.registroPService.post(this.carrito.lista[i], (data as RegistroFinanciero).id).subscribe(data => {
          console.log(data);
        });

        this.menosProducto.emit();
        i++;
      }

      this.carrito.lista = [];
      this.carrito.montoTotal = 0;
    });

  }

}