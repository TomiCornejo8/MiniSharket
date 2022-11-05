import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { Proveedor } from 'src/app/models/proveedor.model';
import { Unidad } from 'src/app/models/unidad.model';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';
import { UnidadService } from 'src/app/services/unidad/unidad.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.sass']
})
export class CrearProductoComponent implements OnInit {
  //Atributos de output
  @Output() crearProducto = new EventEmitter<Producto>();
  
  //Atributos de producto a crear
  nombre: string;
  unidad: string;
  stock: number;
  precio: number;
  proveedor: string;
  categorias:Categoria[];
  img: string;

  //Variables de los dropdown
  unidadesDP:Unidad[];
  categoria:Categoria;
  categoriasDP:Categoria[];
  proveedoresDP:Proveedor[];


  //DEFAULTS
  dCategoria:Categoria = new Categoria(0,"");

  //Bandera
  bandera:boolean = false;

  textoImg:string;

  constructor(private sanitizer: DomSanitizer,
    private productoService:ProductoService,
    private unidadService:UnidadService,
    private categoriaService:CategoriaService,
    private proveedorService:ProveedorService) { }

  ngOnInit(): void {
    this.limpiar();
    this.unidadService.list().subscribe(data =>{
      this.unidadesDP = data;
    });
    let dataSesion = sessionStorage.getItem('usuario');
    if(dataSesion){
      let minimarket = JSON.parse(dataSesion || "[]").id;
      this.proveedorService.get(minimarket).subscribe(data =>{
        this.proveedoresDP = data;
      });
    }
  }

  nuevaCategoria() {
    if (this.categoria.categoria != '') {
      this.categorias.push(this.categoria);
      this.categoriasDP.splice(this.categoriasDP.indexOf(this.categoria), 1);
      this.categoria = this.dCategoria;
    }
  }

  quitarCategoria(i: number) {
    this.categoriasDP.push(this.categorias[i]);
    this.categorias.splice(i, 1);
    this.categoria = this.dCategoria;
  }

  listarCategorias(){
    this.categoria = this.dCategoria; //Cambiar el categoria
    this.categoriasDP = [];
    let dataSesion = sessionStorage.getItem('usuario');
    if(dataSesion){
      let minimarket = JSON.parse(dataSesion || "[]").id;
      this.categoriaService.list(minimarket).subscribe(data =>{
        this.categoriasDP = data;
      });
    }
  }

  limpiar(){
    this.nombre = '';
    this.unidad = '';
    this.stock = 0;
    this.precio = 0;
    this.proveedor = '';
    this.categorias = [];
    this.img = '';
    this.textoImg = '';
    this.listarCategorias();
    this.bandera = false;
  }

  validarVacio(){
    if(this.nombre == '' || this.unidad == '' || this.stock < 0 || this.precio <= 0){
      this.bandera = false;
    }else{
      this.bandera = true;
    }
  }

  // Obtiene la imagen de html
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

  crear(){
    let dataSesion = sessionStorage.getItem('usuario');
    this.unidadesDP.forEach(x =>{
      if(x.unidad == this.unidad) this.unidad = x.id.toString();
    });
    this.proveedoresDP.forEach(x =>{
      if(x.nombre == this.proveedor) this.proveedor = x.id.toString();
    });
    let categoriaID = this.categorias.map(x => x.id.toString());
    let producto = new Producto(this.nombre,this.unidad,this.stock,this.precio,this.proveedor,categoriaID,this.img,false,0,JSON.parse(dataSesion || "[]").id);
    this.productoService.post(producto).subscribe(data =>{
      console.log(data);
    });
    this.crearProducto.emit(producto);
    this.limpiar();
  }
}
