import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Email } from 'src/app/models/email.model';
import { Proveedor } from 'src/app/models/proveedor.model';
import { Telefono } from 'src/app/models/telefono.model';

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
    if(email!='')this.proveedorActual.email.push({"id":this.proveedorActual.numero.length,"email":email,"proveedor":this.proveedorActual.id});
    this.vacioEmail="";
  }

  eliminarEmail(email:Email){
    this.proveedorActual.email.splice(this.proveedorActual.email.indexOf(email),1);
  }

  agregarNumero(numero:string){
    if(numero!='')
    { this.proveedorActual.numero.push({"id":this.proveedorActual.numero.length,"telefono":numero,"proveedor":this.proveedorActual.id});
    this.vacionumero="";}
  }

  eliminarNumero(numero:Telefono){
    this.proveedorActual.numero.splice( this.proveedorActual.numero.indexOf(numero),1);
  }
  
  limpiarVariablesLocales(){
    this.modalService.dismissAll(EditarProveedorComponent);
    this.vacionumero='';
    this.vacioEmail='';
  }
}
