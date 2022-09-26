import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.sass']
})
export class CrearProductoComponent implements OnInit {
  //Atributos de output
  @Output() crearProducto = new EventEmitter<Producto>();
  
  //Atributos de producto a crear
  nombre: string = '';
  unidad: string = '';
  stock: number = 0;
  precio: number = 0;
  proveedor: string = '';
  categorias: string[] = [];
  img: string = '';

  //Variables de los dropdown
  unidadesDP: string[] = ["Unidades", "Kilogramos", "Gramos"];
  categoria: string = '';
  categoriasDP: string[] = ["C1", "C2", "C3"];
  proveedoresDP: string[] = ["P1", "P2", "P3"];

  //Bandera
  bandera:boolean = false;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  nuevaCategoria() {
    if (this.categoria != '') {
      this.categorias.push(this.categoria);
      this.categoriasDP.splice(this.categoriasDP.indexOf(this.categoria), 1);
    }
  }

  quitarCategoria(i: number) {
    this.categoriasDP.push(this.categorias[i]);
    this.categorias.splice(i, 1);
  }

  limpiar(){
    this.nombre = '';
    this.unidad = '';
    this.stock = 0;
    this.precio = 0;
    this.proveedor = '';
    this.categorias = [];
    this.img = '';

    this.categoria = '';
    this.categoriasDP = ["C1", "C2", "C3"];
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
    this.crearProducto.emit(new Producto(this.nombre,this.unidad,this.stock,this.precio,this.proveedor,this.categorias,this.img));
    this.limpiar();
  }
}
