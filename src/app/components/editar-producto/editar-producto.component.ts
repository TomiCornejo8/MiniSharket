import { DomElementSchemaRegistry, } from '@angular/compiler';
import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit ,Output, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.sass']
})
export class EditarProductoComponent implements OnInit,OnChanges {

  @Input() productoEntrada:any;
  @Output() productoCambiado = new EventEmitter<Producto>();
  categorias:any;
  w=window.sessionStorage;
  productoActual:Producto = new Producto();
  proveedoresDP: string[] = ["P1", "P2", "P3"];
  unidadesDP: string[] = ["Unidad", "Kilogramo", "Gramo"];


  constructor( private router:Router) {   
  }
  ngOnChanges(changes: SimpleChanges): void {
      if(changes['productoEntrada'].currentValue){
          this.productoActual=changes['productoEntrada'].currentValue
      }
    
    
    
  }

 

  ngOnInit(): void { 
}
  editar(nombre:string,stock:string,precio:string,imagen:string){
    
      if(nombre!==""){
        this.productoActual.nombre=nombre;
      }
      if(stock!=null && Number.parseInt(stock)>=0){
        this.productoActual.stock=Number.parseInt(stock);
      }
      if(precio!=null && Number.parseInt(precio)>=0){
        this.productoActual.precio=Number.parseInt(precio);
      }
      if(imagen!=null && imagen!==""){
        this.productoActual.img=imagen;
      }
      this.productoCambiado.emit(this.productoActual);
  }

  seleccionarCategoria(categoria:any){
   // if(this.categoriasProducto.indexOf(categoria)===-1){
   //   this.categoriasProducto.push(categoria);
   // }
  
}


seleccionarProveedor(proveedor:any){
  this.productoActual.proveedor=proveedor;
}
eliminarMemoriaProducto(){
  let  stringproductoEditar="productoEditar";
  this.w.removeItem(stringproductoEditar);
  
    
}
eliminarCategoria(categoria:any){

}
}

