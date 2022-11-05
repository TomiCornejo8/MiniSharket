import { Component, EventEmitter, Input, OnChanges, OnInit ,Output, SimpleChanges} from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls:[ './editar-producto.component.sass']
})

export class EditarProductoComponent implements OnInit{

  @Input() productoEntrada:any;
  categorias:string[] = ["C1","C2","C3"];
  w=window.sessionStorage;
  productoActual:Producto = new Producto();
  productoReferencia:Producto;
  img:string="";
  proveedoresDP: string[] = ["P1", "P2", "P3"];
  unidadesDP: string[] = ["Unidad", "Kilogramo", "Gramo"];
  valueImg="";

  constructor( private sanitizer: DomSanitizer,private modalService: NgbModal) {   
  }

  

 

  ngOnInit(): void { 
}
  editar(nombre:string,stock:string,precio:string){
    
      if(nombre!==""){
        this.productoReferencia.nombre=nombre;
      }
      if(stock!=null && Number.parseInt(stock)>=0){
        this.productoReferencia.stock=Number.parseInt(stock);
      }
      if(precio!=null && Number.parseInt(precio)>=0){
        this.productoReferencia.precio=Number.parseInt(precio);
      }
      if(this.img!==""){
        this.productoReferencia.img=this.img;
        this.valueImg='';
        this.img='';
      }
      this.productoReferencia.proveedor=this.productoActual.proveedor;
      this.productoReferencia.unidad=this.productoActual.unidad;
      this.productoReferencia.categorias=this.productoActual.categorias;
      this.modalService.dismissAll(EditarProductoComponent);
  }

  seleccionarCategoria(categoria:any){
    if(this.productoActual.categorias.indexOf(categoria)===-1){
      this.productoActual.categorias.push(categoria);
    }
  
}


seleccionarProveedor(proveedor:any){
  this.productoActual.proveedor=proveedor;
}
seleccionarUnidad(unidad:any){
  this.productoActual.unidad=unidad;
}
eliminarMemoriaProducto(){
  this.modalService.dismissAll(EditarProductoComponent);
  let  stringproductoEditar="productoEditar";
  this.w.removeItem(stringproductoEditar); 
}

eliminarCategoria(categoria:any){
  this.productoActual.categorias.splice(this.productoActual.categorias.indexOf(categoria),1);  
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

