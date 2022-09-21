import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.sass']
})
export class CrearCategoriaComponent implements OnInit {

  categoria:string = "";
  @Output() crearCategoria = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  crear(){
    this.crearCategoria.emit(this.categoria);
  }

}
