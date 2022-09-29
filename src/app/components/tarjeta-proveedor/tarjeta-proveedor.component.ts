import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';

@Component({
  selector: 'app-tarjeta-proveedor',
  templateUrl: './tarjeta-proveedor.component.html',
  styleUrls: ['./tarjeta-proveedor.component.sass']
})
export class TarjetaProveedorComponent implements OnInit {

  @Output() eliminarProveedor = new EventEmitter<Proveedor>();
  @Input() proveedor:Proveedor;
  w=window.sessionStorage;
  insumoFlag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(){
    let eliminar=this.eliminarProveedor;
    let proveedor=this.proveedor;
    setTimeout(function(){
      eliminar.emit(proveedor);
    },2500);
  }

  editarProveedor(){
    
  }

  insumoBtn(){
    if(this.insumoFlag){
      this.insumoFlag = false;
    }else{
      this.insumoFlag = true;
    }
  }
}
