import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.sass']
})
export class InfoUsuarioComponent implements OnInit {

  @Output() cerrarSesion = new EventEmitter<boolean>;

  constructor() { }

  ngOnInit(): void {
  }

  cerrar(){
    this.cerrarSesion.emit(false);
  }

}
