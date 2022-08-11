import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.sass']
})
export class RegistroScreenComponent implements OnInit {

  usuario:string;
  clave1:string;
  clave2:string;

  constructor() { }

  ngOnInit(): void {
  }

}
