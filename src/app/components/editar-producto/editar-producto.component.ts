import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit ,Output, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.sass']
})
export class EditarProductoComponent implements OnInit,OnChanges {
  @Input() editarP:any;
  categorias:any;
  w=window.sessionStorage;
  categoriasProducto=new Array;
  productoActual:Producto = new Producto();
  proveedoresDP: string[] = ["P1", "P2", "P3"];
  unidadesDP: string[] = ["Unidades", "Kilogramos", "Gramos"];
  proveedor: string = '';
  constructor( private router:Router) {   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['editarP'].currentValue===true){
      console.log("hola mundo dentro del change");
      let stringcategoriasProductos='categoriasProductos', stringproductoEditar="productoEditar";
      let varcategorias= this.w.getItem(stringcategoriasProductos), varProducto=this.w.getItem(stringproductoEditar);
      if(varcategorias!==null){
        let categoriasProductos = JSON.parse(varcategorias);
        this.categorias=categoriasProductos;
    }
      if(varProducto!==null){
        let producto = JSON.parse(varProducto);
        this.productoActual=producto;
        this.cargarCategorias();
        
      }
    }
    
  }

 

  ngOnInit(): void {
    
  
}
  editar(nombre:string,stock:string,precio:string,imagen:string){
    
    let producto:Array<any>=[null,null,null,null,null,null,null];
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
   
      this.productoActual.categorias.forEach((actualCategoria:string)=>{
        if( this.categoriasProducto.indexOf(actualCategoria)=== -1) {
            this.categoriasProducto.push(actualCategoria);
        }
      });
  
}
eliminarMemoriaProducto(){
  let  stringproductoEditar="productoEditar";
  this.w.removeItem(stringproductoEditar);
  
    
}
}

