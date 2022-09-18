import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.sass']
})
export class CrearProductoComponent implements OnInit {

  categorias:string[] = ["C1","C2","C3"];
  categoriasSelec:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  nuevaCategoria(categoria:string){
    this.categoriasSelec.push(categoria);
    this.categorias.splice(this.categorias.indexOf(categoria),1);
  }

  quitarCategoria(i:number){
    this.categorias.push(this.categoriasSelec[i]);
    this.categoriasSelec.splice(i,1);
  }
}
