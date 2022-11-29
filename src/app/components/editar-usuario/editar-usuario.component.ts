import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.sass']
})
export class EditarUsuarioComponent implements OnInit {

  datoUsuarioValor:Usuario;
  datoUsuarioReferencia:Usuario;
  flagPassUser=false;
  pass:string='';
  passRep:string='';
  img:string='';
  valueImg:string='';
  clave:string='';
  banderaAlert:boolean = false;
  comp:string;

  constructor(private modalService: NgbModal, 
    private sanitizer:DomSanitizer,
    private usuarioS:UsuarioService){}

  ngOnInit(): void {
    this.pass = '';
    this.passRep = '';
  }


  editar(nombre:string,codigo:string){
    let nombreXD = this.datoUsuarioReferencia.nombre;

    if(nombre != ''){
      this.datoUsuarioReferencia.nombre=nombre;
    }
    if(codigo != ''){
      this.datoUsuarioReferencia.codigo=codigo;
    }
    if(this.img !== ""){
      this.datoUsuarioReferencia.icono=this.img;
      this.valueImg='';
      this.img='';
    }
    if(this.pass.localeCompare(this.passRep)==0 && this.pass!='' && this.passRep!=''){
      this.datoUsuarioReferencia.clave=this.pass;
    }
    if(this.pass != '' && this.img !==""){
      this.usuarioS.put(nombreXD,this.comp,this.datoUsuarioReferencia,1).subscribe(data =>{
        this.datoUsuarioReferencia.icono = (data as Usuario).icono;
      });
    }else if(this.img !==""){
      this.usuarioS.put(nombreXD,this.comp,this.datoUsuarioReferencia,2).subscribe(data =>{
        this.datoUsuarioReferencia.icono = (data as Usuario).icono;
      });
    }else if(this.pass != ''){
      this.usuarioS.put(nombreXD,this.comp,this.datoUsuarioReferencia,3).subscribe(data =>{
      });
    }else{
      this.usuarioS.put(nombreXD,this.comp,this.datoUsuarioReferencia,4).subscribe(data =>{
      });    
    }
    this.modalService.dismissAll(EditarUsuarioComponent);
    this.flagPassUser=false;
  }

  cerrar(){
    this.modalService.dismissAll(EditarUsuarioComponent);
    this.flagPassUser=false;
  }
  comprobar(){
    this.usuarioS.get(this.datoUsuarioReferencia.nombre,this.clave).subscribe(data =>{
      this.comp = this.clave;
      if(data){ 
        this.flagPassUser=true;
      }else{
        this.banderaAlert = true;
      }
      this.limpiar();
    });
  }
  limpiar(){
    this.clave="";
  }

  captureFile(event: any) {
    const img = event.target.files[0];
    this.extractBase64(img).then((image: any) => {
      this.img = image.base;
    });
  }

  // Transforma las imagenes a base64
  extractBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
      return reader.result;
    } catch (e) {
      return null;
    }
  });
}
