import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.sass']
})
export class EditarProductoComponent implements OnInit,DoCheck {
  categorias:any;
  w=window.sessionStorage;
  @Input() actualizar=false;
  constructor() { }
  ngDoCheck(): void {
    
  }

  ngOnInit(): void {
    let stringcategoriasProductos='categoriasProductos';
    let varcategorias= this.w.getItem(stringcategoriasProductos);
    if(varcategorias!==null){
      let categoriasProductos = JSON.parse(varcategorias);
      this.categorias=categoriasProductos;
      console.log(this.categorias);
  }
}
  editar(nombre:string,stock:string,precio:string,imagen:string){

  }
}
