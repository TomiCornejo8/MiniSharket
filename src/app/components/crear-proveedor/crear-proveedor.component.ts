import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.sass']
})
export class CrearProveedorComponent implements OnInit {

  @Output() crearProveedor = new EventEmitter<Proveedor>();

  //Atributos de proveedor
  nombre:string =''; 
  emails:string[] =[];
  numeros:string[] =[];

  numero:string ='';
  email:string = '';
  //Bandera
  bandera:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  limpiar(){
    this.nombre ='';
    this.emails = [];
    this.numeros = [];
    this.numero = '';
    this.email = '';

    this.bandera = false;
  }

  validarVacio(){
    if(this.nombre == '' || this.email.length == 0 || this.numero.length == 0){
      this.bandera = false;
    }else{
      this.bandera = true;
    }
  }

  crear(){
    this.crearProveedor.emit(new Proveedor(this.nombre,this.emails,this.numeros));
    this.limpiar();
  }

  agregarEmail(){
    this.emails.push(this.email);
  }

  agregarNumero(){
    this.numeros.push(this.numero);
  }
}
