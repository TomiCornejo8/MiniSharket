import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from 'src/app/models/producto.model';
import { Proveedor } from 'src/app/models/proveedor.model';
import { RegistroFinanciero } from 'src/app/models/registroFinanciero.model';
import { RegistroProducto } from 'src/app/models/registroProducto.model';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';
import { RegistroFinancieroService } from 'src/app/services/registroFinanciero/registro-financiero.service';
import { RegistroProductoService } from 'src/app/services/registroProducto/registro-producto.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-gasto',
  templateUrl: './editar-gasto.component.html',
  styleUrls: ['./editar-gasto.component.sass']
})
export class EditarGastoComponent implements OnInit {

  model: NgbDateStruct;
  date: { year: number; month: number };
  proveedoresDP:Proveedor[];
  productosProveedoresDP:Producto[]=[];
  proveedor: Proveedor= new Proveedor();
  productoT: Producto= new Producto();
  tablaProductos:RegistroFinanciero= new RegistroFinanciero();
  tablaProductosValor:RegistroFinanciero= new RegistroFinanciero()
  cantidadLocal:number=1;
  montoLocal:number=0;
  proveedorNombre='';
  productosProveedores:Producto[]=[];
  listaValor:RegistroProducto[]=[];
	constructor(private calendar: NgbCalendar,private proveedorService:ProveedorService,
    private registroPService: RegistroProductoService,
    private productoService:ProductoService,private registroFService: RegistroFinancieroService, private modalService:NgbModal) {}

  ngOnInit(): void {
    this.model = this.calendar.getToday();
    let i=0;
    this.tablaProductos.lista.forEach(regis =>{
      regis.producto=this.tablaProductosValor.lista[i].producto;
      i++
    }
    );
    let dataSesion = sessionStorage.getItem('usuario');
    if(dataSesion){
      let minimarket = JSON.parse(dataSesion || "[]").id;
      this.tablaProductos.minimarket=+minimarket;
      this.proveedorService.get(minimarket).subscribe(data =>{
        this.proveedoresDP = (data as Proveedor[]);
      });
      
    }
   

  }
  selectToday() {
    console.log(this.model)
	}
  seleccionarProveedor(proveedor:Proveedor){
    this.proveedorNombre=proveedor.nombre;
	  this.productoService.getProveedor(proveedor.id).subscribe(producto =>{
		this.productosProveedoresDP=(producto as Producto[]);
	})
  }
  seleccionarProducto(){
	let existeProducto=0;
	this.tablaProductos.lista.forEach( producto =>{
		if(producto.producto.nombre.localeCompare(this.productoT.nombre) == 0 ){
			existeProducto++;
		}
	})
    if (existeProducto == 0) {
      this.productoT.proveedor=this.proveedorNombre;
		  this.tablaProductos.lista.push(new RegistroProducto(1,this.productoT.nombre,0,this.productoT.unidad,this.productoT));
	}
  this.productoT= new Producto();
  }
  


	eliminarProducto(registroProducto:any){
		this.tablaProductos.lista.splice(this.tablaProductos.lista.indexOf(registroProducto),1);  
    this.cambioMonto();
	}

	cerrarModal(){
		this.modalService.dismissAll(EditarGastoComponent);
	}

	editar(){
    if(this.tablaProductos.lista.length != 0 && this.montoLocal != 0){
         this.tablaProductos.tipo="2"
         this.tablaProductos.fecha=this.model.day+this.model.month+this.model.year+"";
         this.tablaProductos.montoTotal=this.montoLocal;
         this.registroFService.post(this.tablaProductos.tipo, this.tablaProductos.minimarket).subscribe(data => {
         this.tablaProductos.lista.forEach(producto =>{
         let produc = (producto as RegistroProducto)
         this.registroPService.post(produc, (data as RegistroFinanciero).id).subscribe(data => {
          console.log(data);
          this.tablaProductosValor=(data as RegistroFinanciero);
        });
      })
    
    })
    
		this.modalService.dismissAll(EditarGastoComponent);

    }
    if(this.tablaProductos.lista.length == 0){
      this.gastoVacio();
    }
    if(this.montoLocal== 0 && this.tablaProductos.lista.length > 0){
      this.MontoCero();
    }
    
	}

	cambioMonto(){
    this.montoLocal=0;
    this.tablaProductos.lista.forEach(producto =>{
        this.montoLocal+= producto.precio;
    })
	}

  gastoVacio(){  
    Swal.fire({ 
      text: 'La tabla de gasto no puede estar vacia',  
      
    }) 
  } 
  MontoCero(){  
    Swal.fire({ 
      text: 'El monto no puede ser 0',  
      
    }) 
  } 
}
