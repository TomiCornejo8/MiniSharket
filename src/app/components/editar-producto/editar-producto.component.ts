import { Component, OnInit, Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { Proveedor } from 'src/app/models/proveedor.model';
import { Unidad } from 'src/app/models/unidad.model';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';
import { UnidadService } from 'src/app/services/unidad/unidad.service';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.sass']
})

export class EditarProductoComponent implements OnInit{

  //Producto de referencia
  @Input() producto:Producto;

  // Variables
  img: string;
  nombre: string;
  unidad: string;
  stock: number;
  precio: number;
  proveedor: string;
  categorias: Categoria[] = [];

  // Extras
  textoImg: string;
  categoria: Categoria;
  bandera:boolean = false;
  dCategoria:Categoria = new Categoria(0,"");

  //Dropdowns
  unidadDP:Unidad[] = [];
  proveedorDP:Proveedor[] = [];
  categoriaDP:Categoria[] = [];

  constructor(private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private unidadService:UnidadService,
    private proveedorService:ProveedorService,
    private categoriaService:CategoriaService,
    private productoService:ProductoService){}

  ngOnInit(): void {
    this.img = this.producto.img;
    this.nombre = this.producto.nombre;
    this.unidad = this.producto.unidad;
    this.stock = this.producto.stock;
    this.precio = this.producto.precio;
    this.proveedor = this.producto.proveedor;

    // Dropsowns
    this.unidadService.list().subscribe(data =>{
      this.unidadDP = (data as Unidad[]);
    });

    let data = sessionStorage.getItem("usuario");
    let minimarket = JSON.parse(data || "[]").id;
    this.proveedorService.get(minimarket).subscribe(data =>{
      this.proveedorDP = (data as Proveedor[]);
    });

    this.categoriaService.list(minimarket).subscribe(data =>{
      this.categoriaDP = (data as Categoria[]);
      for(let i= 0; i<this.producto.categorias.length; i++){
        for(let j = 0; j<this.categoriaDP.length; j++){
          if(this.producto.categorias[i] == this.categoriaDP[j].id.toString()){
            this.categorias.push(this.categoriaDP[j]);
            this.categoriaDP.splice(j,1);
          }
        }
      }
    });

    this.categoria = this.dCategoria;
  }

  validar(){
    if(this.nombre == "" || this.stock == 0 || this.precio == 0){
      this.bandera = false;
    }else{
      this.bandera = true;
    }
  }

  nuevaCategoria(){
    if (this.categoria.categoria != '') {
      this.categorias.push(this.categoria);
      this.categoriaDP.splice(this.categoriaDP.indexOf(this.categoria), 1);
      this.categoria = this.dCategoria;
      this.validar();
    }
  }

  quitarCategoria(i: number) {
    this.categoriaDP.push(this.categorias[i]);
    this.categorias.splice(i, 1);
    this.categoria = this.dCategoria;
    this.validar();
  }

  editar(){
    let bandera;
    if(this.producto.img == this.img){
      bandera = false;
    }else{
      bandera = true;
    }
    this.producto.img = this.img;
    this.producto.nombre = this.nombre;
    this.producto.unidad = this.unidad;
    this.producto.stock = this.stock;
    this.producto.precio = this.precio;
    this.producto.proveedor = this.proveedor;
    this.producto.categorias = this.categorias.map(x => x.id.toString());

    let auxUnidad = this.producto.unidad;
    
      if(this.stock > 0 && this.producto.banderaCarrito == true ){
          this.producto.banderaCarrito=false;
        }
    
    
    this.unidadDP.forEach(x =>{
      if(x.unidad == this.producto.unidad) this.producto.unidad = x.id.toString();
    });

    let auxProveedor = this.producto.proveedor;
    this.proveedorDP.forEach(x =>{
      if(x.nombre == this.producto.proveedor) this.producto.proveedor = x.id.toString();
    });

    this.productoService.put(this.producto,bandera).subscribe(data =>{
      console.log(data);
    });
    this.producto.unidad = auxUnidad;
    this.producto.proveedor = auxProveedor;

    this.modalService.dismissAll(EditarProductoComponent);
  }

  cancelar(){
    this.modalService.dismissAll(EditarProductoComponent);
  }

  captureFile(event: any) {
    const img = event.target.files[0];
    this.extractBase64(img).then((image: any) => {
      this.img = image.base;
      this.validar();
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

