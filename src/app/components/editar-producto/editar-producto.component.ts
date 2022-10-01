import { Component, DoCheck, EventEmitter, Input, OnInit ,Output} from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.sass']
})
export class EditarProductoComponent implements OnInit {
  categorias:any;
  w=window.sessionStorage;
  categoriasProducto=new Array;
  constructor() { }
 

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
    let producto:Array<any>=[null,null,null,null,null];
      if(nombre!==""){
        producto[0]=nombre;
      }
      if(stock!=null && Number.parseInt(stock)>=0){
        producto[2]=stock;
      }
      if(precio!=null && Number.parseInt(precio)>=0){
        producto[3]=precio;
      }
      if(imagen!=null && imagen!==""){
        producto[4]=imagen;
      }
      producto[1]=this.categoriasProducto;
      this.w.setItem("Producto",JSON.stringify(producto));
      this.w.setItem("flagEditarProducto",JSON.stringify(true));
  }

  seleccionarCategoria(categoria:any){
    if(this.categoriasProducto.indexOf(categoria)===-1){
      this.categoriasProducto.push(categoria);
    }
  
}
eliminarCategoria(categoria:any){
  this.categoriasProducto.splice(this.categoriasProducto.indexOf(categoria),1);
}

cargarCategorias(){
  this.categoriasProducto.push("hola","hola2","hola3");
}

}

