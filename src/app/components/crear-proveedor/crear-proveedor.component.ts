import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';
import { Email } from "src/app/models/email.model";
import { Telefono } from "src/app/models/telefono.model";
import { EmailService } from 'src/app/services/email/email.service';
import { TelefonoService } from 'src/app/services/telefono/telefono.service';
@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.sass']
})
export class CrearProveedorComponent implements OnInit {

  @Output() crearProveedor = new EventEmitter<Proveedor>();

  //Atributos de proveedo
  nombre:string =''; 
  emails:string[] =[];
  numeros:string[] =[];

  numero:string ='';
  email:string = '';
  //Bandera
  bandera:boolean = false;

  constructor(private proveedorService:ProveedorService,
    private emailService:EmailService,
    private telefonoService:TelefonoService) { }

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
    if (this.email != '') {
      this.emails.push(this.email);
    }
    if (this.numero != '') {
      this.numeros.push(this.numero);
    }
    let datos = sessionStorage.getItem('usuario');
    let minimarket = JSON.parse(datos || "[]").id;

    this.proveedorService.post(this.nombre,minimarket).subscribe(data =>{
      let proveedor = new Proveedor(this.nombre,[],[],(data as Proveedor).id,minimarket);
      this.emails.forEach(email =>{
        this.emailService.post(email,(data as Proveedor).id).subscribe(aux =>{
          proveedor.email.push((aux as Email));
        });
        
        this.numeros.forEach(numero =>{
          this.telefonoService.post(numero,(data as Proveedor).id).subscribe(aux =>{
            proveedor.numero.push((aux as Telefono));
          });
        });
      this.crearProveedor.emit(proveedor);
    });

    this.limpiar();
  });
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
