import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';

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
    }
  }

  ngOnInit(): void {
  }

  eliminar(respuesta:any){
    console.log(this.proveedor)
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
}
