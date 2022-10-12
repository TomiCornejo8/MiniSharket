import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.sass']
})
export class InfoUsuarioComponent implements OnInit {

  icono:string = "";
  nombre:string = "";

  constructor() { }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('usuario');
    if(datos){
      this.icono = JSON.parse(datos || "[]").icono;
      this.nombre = JSON.parse(datos || "[]").nombre;
    }
  }

  cerrar(){
    sessionStorage.clear();
    window.location.href="/inicio";
  }

}
