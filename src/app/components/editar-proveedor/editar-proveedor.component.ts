import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Email } from 'src/app/models/email.model';
import { Proveedor } from 'src/app/models/proveedor.model';
import { Telefono } from 'src/app/models/telefono.model';
import { EmailService } from 'src/app/services/email/email.service';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';
import { TelefonoService } from 'src/app/services/telefono/telefono.service';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.sass']
})
export class EditarProveedorComponent implements OnInit {
  proveedorActual:Proveedor= new Proveedor();
  proveedorReferencia:Proveedor;
  vacionumero='';
  vacioEmail='';
  constructor(private modalService: NgbModal,
    private proveedorService:ProveedorService,
    private emailService:EmailService,
    private telefonoService:TelefonoService) { }


  ngOnInit(): void {
  }

  editarProveedor(nombre:string){
    if(nombre!==''){
      this.proveedorService.put(this.proveedorActual.nombre,this.proveedorReferencia.id).subscribe(data =>{
        console.log(data);
      });
      this.proveedorReferencia.nombre=nombre;
    }
    if(this.proveedorActual.email.length!==0){
      this.proveedorActual.email.forEach(email =>{
        if(email.id == 0){
          this.emailService.post(email.email,this.proveedorActual.id).subscribe(data =>{
            email.id = (data as Email).id;
          });
        }
      });

      this.proveedorReferencia.email.forEach((email) =>{
        if(this.proveedorActual.email.indexOf(email) == -1){
          this.emailService.delete(email.id).subscribe(data =>{
            console.log(data);
          });
        }
      });

      this.proveedorReferencia.email=this.proveedorActual.email;
    }
    if(this.proveedorActual.numero.length!==0){
      this.proveedorActual.numero.forEach(numero =>{
        if(numero.id == 0){
          this.telefonoService.post(numero.telefono,this.proveedorActual.id).subscribe(data =>{
            numero.id = (data as Telefono).id;
          });
        }
      });
      this.proveedorReferencia.numero.forEach((numero) =>{
        if(this.proveedorActual.numero.indexOf(numero) == -1){
          this.telefonoService.delete(numero.id).subscribe(data =>{
            console.log(data);
          });
        }
      });

      this.proveedorReferencia.numero=this.proveedorActual.numero;
    }
    this.modalService.dismissAll(EditarProveedorComponent);
    
  }

  agregarEmail(email:string){
    if(this.proveedorActual.email.length == 0)this.proveedorActual.email=[]
    if(email!='')this.proveedorActual.email.push(new Email(0,email,this.proveedorActual.id));
    this.vacioEmail="";
  }

  eliminarEmail(email:Email){
    this.proveedorActual.email.splice(this.proveedorActual.email.indexOf(email),1);
  }

  agregarNumero(numero:string){
    if(this.proveedorActual.numero.length == 0) this.proveedorActual.numero=[]

    if(numero!='' && this.proveedorActual.numero != undefined) this.proveedorActual.numero.push(new Telefono(0,numero,this.proveedorActual.id));
    this.vacionumero="";
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
