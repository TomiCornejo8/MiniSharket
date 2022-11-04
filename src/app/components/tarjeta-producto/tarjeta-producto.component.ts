import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import  Swal  from 'sweetalert2';
@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.sass']
})
export class TarjetaProductoComponent implements OnInit,OnChanges {

  @Output() eliminarProducto = new EventEmitter<Producto>();
  @Output() agregarCarrito = new EventEmitter<Producto>();
  @Output() editarProductoFlag = new EventEmitter<Producto>();
  @Input() producto:Producto;
  @Input() productoEditar:any;
  editar=false;
  eliminarP=false;
  w=window.sessionStorage;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.editar===true){
        this.producto=changes["productoEditar"].currentValue;
        this.editar=false
    }
    if(this.eliminarP===true){
      if(changes["respuestaEliminar"].currentValue === true ){
        console.log("Tarjeta productos ===>",this.producto)
        this.eliminarProducto.emit(this.producto)
        this.eliminarP=false;
      }
      
  }
  this.eliminarP=false;
  }

  ngOnInit(): void {
  }
  /*
  eliminar(respuesta:any){
    if(respuesta)this.eliminarProducto.emit(this.producto)
  }*/

  editarProducto(){
    this.editarProductoFlag.emit(this.producto);
    this.editar=true;
  }

  agregar(){
    this.agregarCarrito.emit(this.producto);
    this.producto.banderaCarrito = true;
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
        this.eliminarProducto.emit(this.producto);
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
