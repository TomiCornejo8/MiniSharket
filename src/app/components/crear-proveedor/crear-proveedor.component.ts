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

  validarVacio():void{
    if(this.nombre != ''){
      if(this.emails.length > 0 || this.email != ''){
        if(this.numeros.length > 0 || this.numero != ''){
          this.bandera = true;
          return;
        }
      }
    }
    this.bandera = false;
    return;
  }

  crear(){
    if (this.email != '') this.emails.push(this.email);
    if (this.numero != '') this.numeros.push(this.numero);
    this.crearProveedor.emit(new Proveedor(this.nombre,this.emails,this.numeros));
    this.limpiar();
  }

  agregarEmail(){
    if(this.email != ''){
      this.emails.push(this.email);
      this.email = '';
      this.validarVacio();
    }
  }

  agregarNumero(){
    if(this.numero != ''){
      this.numeros.push(this.numero);
      this.numero = '';
      this.validarVacio();
    }
  }

  quitarN(i:number){
    this.numeros.splice(i,1);
    this.validarVacio();
  }

  quitarE(i:number){
    this.emails.splice(i,1);
    this.validarVacio();
  }
}
