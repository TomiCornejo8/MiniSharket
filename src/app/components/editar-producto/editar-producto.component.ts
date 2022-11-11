import { Component,Input, OnInit} from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/models/categoria.model';
import { Proveedor } from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { Unidad } from 'src/app/models/unidad.model';
import { UnidadService } from 'src/app/services/unidad/unidad.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls:[ './editar-producto.component.sass']
})

export class EditarProductoComponent implements OnInit{

  @Input() productoEntrada:any;
  categorias:Categoria[] = [];
  w=window.sessionStorage;
  productoActual:Producto = new Producto();
  productoReferencia:Producto;
  img:string="";
  proveedoresDP: Proveedor[] ;
  unidadesDP:Unidad[];
  valueImg="";
  dataSesion = sessionStorage.getItem('usuario');


  constructor( private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private proveedorService:ProveedorService,
    private categoriaService:CategoriaService,
    private productoService:ProductoService,
    private unidadService:UnidadService){}

  ngOnInit(): void { 
    if(this.dataSesion){
      let minimarket = JSON.parse(this.dataSesion || "[]").id;
      this.categoriaService.list(minimarket).subscribe(data =>{
        this.categorias = data;

      });
    }
    if(this.dataSesion){
      let minimarket = JSON.parse(this.dataSesion || "[]").id;
      this.proveedorService.get(minimarket).subscribe(data=>{
        this.proveedoresDP = data;
      });
    }

    this.unidadService.list().subscribe(data =>{
      this.unidadesDP = (data as Unidad[]);
    });
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
      // this.productoService.put(this.productoReferencia).subscribe(data=>{
      //   console.log(data);
      // });
      let auxUni = this.productoReferencia.unidad;
      this.unidadesDP.forEach(x =>{
        if(x.unidad == this.productoReferencia.unidad){
          this.productoReferencia.unidad = x.id.toString();
          return;
        }
      });
      // let auxPro = this.productoReferencia.proveedor;
      // this.proveedoresDP.forEach(x =>{
      //   if(x.nombre == this.productoReferencia.proveedor){
      //     this.productoReferencia.proveedor = x.id.toString();
      //     return;
      //   }
      // });
      alert(this.productoReferencia.proveedor);
      this.productoReferencia.unidad = auxUni;
      // this.productoReferencia.proveedor = auxPro;

  }

  seleccionarCategoria(categoria:any){
    if(this.productoActual.categorias.indexOf(categoria)===-1){
      this.productoActual.categorias.push(categoria);
    }
  
}


seleccionarProveedor(proveedor:any){
  alert("holaXD");
  this.productoActual.proveedor=proveedor;
  alert("hola");
}
seleccionarUnidad(unidad:any){
  this.productoActual.unidad=unidad.unidad  ;
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

