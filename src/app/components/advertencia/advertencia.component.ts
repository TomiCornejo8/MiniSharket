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

  revisarRespuesta(respuesta:boolean){
    if(respuesta === true){
        this.respuesta.emit(respuesta);
      }
  }

}
