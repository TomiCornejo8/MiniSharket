import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso-screen',
  templateUrl: './ingreso-screen.component.html',
  styleUrls: ['./ingreso-screen.component.sass']
})
export class IngresoScreenComponent implements OnInit {

  usuario:string = "";
  clave:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
