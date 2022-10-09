import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  sesion:boolean = true;
  bandera:boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
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
