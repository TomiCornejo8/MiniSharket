import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  sesion:boolean = false;
  bandera:boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('usuario');
    if(datos){
      this.sesion = true;
    }
  }

  ajustePantalla(){
    if(window.screen.width<991){
      this.bandera = true;
    }else{
      this.bandera = false;
    }

  }
  // estadoSesion(sesion:boolean){
  //   this.sesion = sesion;
  //   window.location.href="/inicio";
  // }

}
