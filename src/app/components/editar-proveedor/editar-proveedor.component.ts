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
  proveedorActual:Proveedor= new Proveedor();
  vacio='';
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['proveedorEntrada'].currentValue){
      console.log(changes['proveedorEntrada'].currentValue)
        this.proveedorActual=changes['proveedorEntrada'].currentValue;
    }
  }

  ngOnInit(): void {
  }

  editarProveedor(nombre:string){
    if(nombre!=='')this.proveedorActual.nombre=nombre;

    this.proveedorCambiado.emit(this.proveedorActual);
  }
  agregarEmail(email:string){
    if(email!='')this.proveedorActual.email.push(email);
    this.vacio="";
  }
  eliminarEmail(email:string){
    this.proveedorActual.email.splice(this.proveedorActual.email.indexOf(email),1);
  }
  
  agregarNumero(numero:string){
    if(numero!='')
    {this.proveedorActual.numero.push(numero);
    this.vacio="";}
  }
  eliminarNumero(numero:string){
    this.proveedorActual.numero.splice(this.proveedorActual.numero.indexOf(numero),1);
  }
  
}
