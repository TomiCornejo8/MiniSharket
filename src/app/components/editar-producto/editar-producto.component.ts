import { Component, EventEmitter, Input, OnChanges, OnInit ,Output, SimpleChanges} from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls:[ './editar-producto.component.sass']
})

export class EditarProductoComponent implements OnInit,OnChanges {

  @Input() productoEntrada:any;
  @Output() productoCambiado = new EventEmitter<Producto>();
  categorias:any;
  w=window.sessionStorage;
  productoActual:Producto = new Producto();
  img:string="";
  proveedoresDP: string[] = ["P1", "P2", "P3"];
  unidadesDP: string[] = ["Unidad", "Kilogramo", "Gramo"];
  valueImg="";

  constructor( private sanitizer: DomSanitizer) {   
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['productoEntrada'].currentValue){
          this.productoActual=changes['productoEntrada'].currentValue  
      }
     
  }

 

  ngOnInit(): void { 
}
  editar(nombre:string,stock:string,precio:string){
    
      if(nombre!==""){
        this.productoActual.nombre=nombre;
      }
      if(stock!=null && Number.parseInt(stock)>=0){
        this.productoActual.stock=Number.parseInt(stock);
      }
      if(precio!=null && Number.parseInt(precio)>=0){
        this.productoActual.precio=Number.parseInt(precio);
      }
      if(this.img!==""){
        this.productoActual.img=this.img;
        this.valueImg='';
        this.img='';
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

captureFile(event: any) {
  const img = event.target.files[0];
  this.extractBase64(img).then((image: any) => {
    this.img = image.base;
  });
}

// Transforma las imagenes a base64
extractBase64 = async ($event: any) => new Promise((resolve, reject) => {
  try {
    const unsafeImg = window.URL.createObjectURL($event);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () => {
      resolve({
        base: reader.result
      });
    };
    reader.onerror = error => {
      resolve({
        base: null
      });
    };
    return reader.result;
  } catch (e) {
    return null;
  }
});



}

