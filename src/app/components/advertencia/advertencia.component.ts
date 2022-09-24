import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-advertencia',
  templateUrl: './advertencia.component.html',
  styleUrls: ['./advertencia.component.sass']
})
export class AdvertenciaComponent implements OnInit {

  @Output() respuesta = new EventEmitter<boolean>;
  constructor() { }

  ngOnInit(): void {
  }

  revisarRespuesta(aux:boolean){
    if(aux === true){
        let flagEliminarProducto='flagEliminarProducto';
        let flagEliminar=true;
        window.sessionStorage.setItem(flagEliminarProducto,JSON.stringify(flagEliminar));
        console.log(window.sessionStorage.getItem(flagEliminarProducto));
      }
  }

}
