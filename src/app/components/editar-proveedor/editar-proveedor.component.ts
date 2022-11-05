import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proveedor } from 'src/app/models/proveedor.model';
@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.sass']
})
export class EditarProveedorComponent implements OnInit,OnChanges {
  @Input() proveedorEntrada:any;
  proveedorActual:Proveedor= new Proveedor();
  proveedorReferencia:any;
  emails=new Array();
  numeros=new Array();
  vacionumero='';
  vacioEmail='';
  constructor(private modalService: NgbModal) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes,"En changes editar provee")
    if(changes['proveedorEntrada'].currentValue){
        this.proveedorActual=changes['proveedorEntrada'].currentValue;
        this.emails=new Array();
        this.numeros=new Array();
        this.proveedorActual.email.forEach(email=>{
          this.emails.push(email);
        });
        this.proveedorActual.numero.forEach(numero=>{
          this.numeros.push(numero);
        });
        
    }
  }

  ngOnInit(): void {
  }

  editarProveedor(nombre:string){
    if(nombre!==''){
      this.proveedorReferencia.nombre=nombre;
    }
    if(this.emails.length!==0){
      this.proveedorReferencia.email=this.emails;
    }
    if(this.numeros.length!==0){
      this.proveedorReferencia.numero=this.numeros;
    }
    this.modalService.dismissAll(EditarProveedorComponent);
    
  }
  agregarEmail(email:string){
    if(email!='')this.emails.push(email);
    this.vacioEmail="";
  }
  eliminarEmail(email:string){
    this.emails.splice(this.emails.indexOf(email),1);
  }
  
  agregarNumero(numero:string){
    if(numero!='')
    {this.numeros.push(numero);
    this.vacionumero="";}
  }
  eliminarNumero(numero:string){
    this.numeros.splice(this.numeros.indexOf(numero),1);
  }
  limpiarVariablesLocales(){
    this.modalService.dismissAll(EditarProveedorComponent);
    this.vacionumero='';
    this.vacioEmail='';
  }
}
