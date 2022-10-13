import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  sesion:boolean = false;
  pantalla:boolean = false;
  icono:string = "";

  constructor() { 
  }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('usuario');
    if(datos){
      this.sesion = true;
      this.icono = JSON.parse(datos || "[]").icono;
    }
  }

  ajustePantalla(){
    if(window.screen.width<991){
      this.pantalla = true;
    }else{
      this.pantalla = false;
    }

  }
}
