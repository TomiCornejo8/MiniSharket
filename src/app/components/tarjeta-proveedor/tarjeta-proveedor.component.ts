import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import  Swal  from 'sweetalert2';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { EditarProveedorComponent } from '../editar-proveedor/editar-proveedor.component';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto/producto.service';
@Component({
  selector: 'app-tarjeta-proveedor',
  templateUrl: './tarjeta-proveedor.component.html',
  styleUrls: ['./tarjeta-proveedor.component.sass']
})
export class TarjetaProveedorComponent implements OnInit {

  @Output() eliminarProveedor = new EventEmitter<Proveedor>();
  @Input() proveedor:Proveedor;
  @Input() proveedorEditar:any;
  productos:Producto[] = [];
  editar=false
  w=window.sessionStorage;
  closeResult = '';
  insumoFlag=false;
  constructor(private modalService: NgbModal,
    private productoService:ProductoService) { }
  

  ngOnInit(): void {
  }

  eliminar(respuesta:any){
    if(respuesta)this.eliminarProveedor.emit(this.proveedor)
  }

  abrirModalEditarProveedor() {
		const modalRef=this.modalService.open(EditarProveedorComponent);
    modalRef.componentInstance.proveedorActual=JSON.parse(JSON.stringify(this.proveedor));
    modalRef.componentInstance.proveedorReferencia=this.proveedor;
	}

  insumoBtn(){
    if(this.productos.length == 0){
      this.productoService.getProveedor(this.proveedor.id).subscribe(data =>{
        this.productos = (data as Producto[]);
      });
    }
    if(this.insumoFlag == false){
      this.insumoFlag=true;
    }
    else{
      this.insumoFlag=false;
    }
  }
  
  confirmBox(){  
    Swal.fire({  
      html:
      "<span style='font-size: 33px'>Esta seguro que quiere eliminar el proveedor "+"<b>"+this.proveedor.nombre+"</b> </span>", 
      text: 'No podra ser recuperado',    
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Si,eliminar',
      cancelButtonText: 'No,cancelar'  
    }).then((result) => {  
      if (result.value) { 
        this.eliminarProveedor.emit(this.proveedor);
      }  
    })  
  }  

}
