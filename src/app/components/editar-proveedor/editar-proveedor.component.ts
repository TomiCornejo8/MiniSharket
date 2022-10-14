import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.sass']
})
export class EditarProveedorComponent implements OnInit,OnChanges {
  @Input() proveedorEntrada:any;
  @Output() proveedorCambiado = new EventEmitter<Proveedor>();
  @Output() editarCancelado = new EventEmitter<boolean>();
  proveedorActual:Proveedor= new Proveedor();
  emails=new Array();
  numeros=new Array();
  vacionumero='';
  vacioEmail='';
  constructor() { }
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
      this.proveedorActual.nombre=nombre;
    }
    if(this.emails.length!==0){
      this.proveedorActual.email=this.emails;
    }
    if(this.numeros.length!==0){
      this.proveedorActual.numero=this.numeros;
    }

    this.proveedorCambiado.emit(this.proveedorActual);
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
    this.vacionumero='';
    this.vacioEmail='';
    this.editarCancelado.emit(true);
  }
}
