import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import  Swal  from 'sweetalert2';
@Component({
  selector: 'app-tarjeta-proveedor',
  templateUrl: './tarjeta-proveedor.component.html',
  styleUrls: ['./tarjeta-proveedor.component.sass']
})
export class TarjetaProveedorComponent implements OnInit,OnChanges {

  @Output() eliminarProveedor = new EventEmitter<Proveedor>();
  @Output() editarProvee = new EventEmitter<Proveedor>();
  @Input() proveedor:Proveedor;
  @Input() proveedorEditar:any;
  editar=false
  w=window.sessionStorage;
  insumoFlag:boolean = false;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.editar===true){
      this.proveedor=changes['proveedorEditar'].currentValue
      this.editar=false
      console.log(this.editar)
    }
  }

  ngOnInit(): void {
  }

  eliminar(respuesta:any){
    if(respuesta)this.eliminarProveedor.emit(this.proveedor)
  }

  editarProveedor(){
    this.editarProvee.emit(this.proveedor);
    this.editar=true;
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
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, delete it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) {  
        Swal.fire(  
          'Deleted!',  
          'Your imaginary file has been deleted.',  
          'success'  
        )  ;
        this.eliminarProveedor.emit(this.proveedor);
      } 
      else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',  
          'Your imaginary file is safe :)',  
          'error'  
        )  
        
      }  
    })  
  }  

}
