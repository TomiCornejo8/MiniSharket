import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.sass']
})
export class CrearProveedorComponent implements OnInit {

  @Output() crearProveedor = new EventEmitter<Proveedor>();
  @Input() proveedor:Proveedor;

  //Bandera
  bandera:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  limpiar(){
    this.nombre ='';
    this.email = '';
    this.numero = '';

    this.bandera = false;
  }

  validarVacio(){
    if(this.nombre == '' || this.email == '' || this.numero == ''){
      this.bandera = false;
    }else{
      this.bandera = true;
    }
  }

  crear(){
    this.crearProveedor.emit(new Proveedor(this.nombre,this.email,this.numero));
    this.limpiar();
  }
}
