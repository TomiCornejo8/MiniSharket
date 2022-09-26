import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito-venta',
  templateUrl: './carrito-venta.component.html',
  styleUrls: ['./carrito-venta.component.sass']
})
export class CarritoVentaComponent implements OnInit {
  montoTotal=0;
  constructor() { }

  ngOnInit(): void {
  }

}
