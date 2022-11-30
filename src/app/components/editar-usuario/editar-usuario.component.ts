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
  nombre:string = '';
  codigo:string = '';
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


  editar(){
    let nombreXD = this.datoUsuarioReferencia.nombre;

    if(this.nombre != ''){
      this.datoUsuarioReferencia.nombre=this.nombre;
    }
    if(this.codigo != ''){
      this.datoUsuarioReferencia.codigo=this.codigo;
    }
    if(this.img !== ""){
      this.datoUsuarioReferencia.icono=this.img;
      this.valueImg='';
      this.img='';
    }
    if(this.pass.localeCompare(this.passRep)==0 && this.pass!='' && this.passRep!=''){
      this.datoUsuarioReferencia.clave=this.pass;
    }else{
      this.datoUsuarioReferencia.clave=this.comp;
    }

    if(this.img !=""){
      this.usuarioS.put(nombreXD,this.comp,this.datoUsuarioReferencia,true).subscribe(data =>{
        console.log(data);
        this.datoUsuarioReferencia.icono = (data as Usuario).icono;
      });
    }else{
      this.usuarioS.put(nombreXD,this.comp,this.datoUsuarioReferencia,false).subscribe(data =>{
        console.log(data);
      }); 
    }
    this.nombre = this.codigo = '';
    sessionStorage.clear();
    if(this.datoUsuarioReferencia.tipo == "1"){
      sessionStorage.setItem('usuario',JSON.stringify({"id":this.datoUsuarioReferencia.id,"nombre":this.datoUsuarioReferencia.nombre,"icono":this.datoUsuarioReferencia.icono,"tipo":this.datoUsuarioReferencia.tipo,"codigo":this.datoUsuarioReferencia.codigo}));
    }else{
      sessionStorage.setItem('usuario',JSON.stringify({"id":this.datoUsuarioReferencia.minimarket,"nombre":this.datoUsuarioReferencia.nombre,"icono":this.datoUsuarioReferencia.icono,"tipo":this.datoUsuarioReferencia.tipo,"codigo":this.datoUsuarioReferencia.codigo}));
    }
    window.location.href="/inicio";
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
