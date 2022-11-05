import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proveedor } from 'src/app/models/proveedor.model';
@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.sass']
})
export class EditarProveedorComponent implements OnInit {
  proveedorActual:Proveedor= new Proveedor();
  proveedorReferencia:any;
  vacionumero='';
  vacioEmail='';
  constructor(private modalService: NgbModal) { }


  ngOnInit(): void {
  }

  editarProveedor(nombre:string){
    if(nombre!==''){
      this.proveedorReferencia.nombre=nombre;
    }
    if(this.proveedorActual.email.length!==0){
      this.proveedorReferencia.email=this.proveedorActual.email;
    }
    if(this.proveedorActual.numero.length!==0){
      this.proveedorReferencia.numero=this.proveedorActual.numero;
    }
    this.modalService.dismissAll(EditarProveedorComponent);
    
  }
  agregarEmail(email:string){
    if(email!='')this.proveedorActual.email.push(email);
    this.vacioEmail="";
  }
  eliminarEmail(email:string){
    this.proveedorActual.email.splice(this.proveedorActual.email.indexOf(email),1);
  }
  agregarNumero(numero:string){
    if(numero!='')
    { this.proveedorActual.numero.push(numero);
    this.vacionumero="";}
  }
  eliminarNumero(numero:string){
    this.proveedorActual.numero.splice( this.proveedorActual.numero.indexOf(numero),1);
  }
  limpiarVariablesLocales(){
    this.modalService.dismissAll(EditarProveedorComponent);
    this.vacionumero='';
    this.vacioEmail='';
  }
}
