import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  sesion:boolean = true;

  constructor() { 
  }

  ngOnInit(): void {
  }

  // estadoSesion(sesion:boolean){
  //   this.sesion = sesion;
  //   window.location.href="/inicio";
  // }

}
