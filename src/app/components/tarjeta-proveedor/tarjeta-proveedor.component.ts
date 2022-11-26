import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import  Swal  from 'sweetalert2';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { EditarProveedorComponent } from '../editar-proveedor/editar-proveedor.component';
@Component({
  selector: 'app-tarjeta-proveedor',
  templateUrl: './tarjeta-proveedor.component.html',
  styleUrls: ['./tarjeta-proveedor.component.sass']
})
export class TarjetaProveedorComponent implements OnInit {

  @Output() eliminarProveedor = new EventEmitter<Proveedor>();
  @Input() proveedor:Proveedor;
  @Input() proveedorEditar:any;
  editar=false
  w=window.sessionStorage;
  insumoFlag:boolean = false;
 
  closeResult = '';
  
  constructor(private modalService: NgbModal) { }
  

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
    if(this.insumoFlag){
      this.insumoFlag = false;
    }else{
      this.insumoFlag = true;
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
