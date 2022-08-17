import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/models/venta.model';

@Component({
  selector: 'app-ventas-screen',
  templateUrl: './ventas-screen.component.html',
  styleUrls: ['./ventas-screen.component.sass']
})
export class VentasScreenComponent implements OnInit {

  ventas:Venta[] = [
    new Venta("24 marzo 2015",["jamon","pan"],5000,"Efectivo"),
    new Venta("24 febrero 2015",["helado"],5000,"Efectivo"),
    new Venta("2 marzo 2015",["Jamon,queso"],5000,"Efectivo"),
    new Venta("7 mayo 2015",["Papas fritas"],5000,"Efectivo"),
    new Venta("24 marzo 2015",["Fanta 3 litros"],5000,"Credito"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
