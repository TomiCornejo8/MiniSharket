import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-productos',
  templateUrl: './filtro-productos.component.html',
  styleUrls: ['./filtro-productos.component.sass']
})
export class FiltroProductosComponent implements OnInit {

  categorias:string[] = ["C1","C2","C3"];

  constructor() { }

  ngOnInit(): void {
    //sessionStorage.setItem('categorias',JSON.stringify();
  }

  crearCategoria(categoria:string){
    this.categorias.push(categoria);
  }

}
