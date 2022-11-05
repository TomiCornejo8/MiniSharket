import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro-productos',
  templateUrl: './filtro-productos.component.html',
  styleUrls: ['./filtro-productos.component.sass']
})
export class FiltroProductosComponent implements OnInit {
  @Output() enviarFiltro=new EventEmitter<string>;
  categorias:string[] = ["C1","C2","C3"];
  Hola:any;
  constructor() { }

  ngOnInit(): void {
    sessionStorage.setItem('categoriasProductos',JSON.stringify(this.categorias));
  }

  crearCategoria(categoria:string){
    this.categorias.push(categoria);
    sessionStorage.setItem('categoriasProductos',JSON.stringify(this.categorias));
  }

  filtroActual(value:string){
    this.enviarFiltro.emit(value);
  }

}
