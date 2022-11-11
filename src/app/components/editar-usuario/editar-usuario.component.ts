import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario.model';

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
  constructor(private modalService: NgbModal , private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.pass='';
    this.passRep='';
  }


  editar(nombre:string){
    if(nombre!=''){
        this.datoUsuarioReferencia.nombre=nombre;
    }
    if(this.img!==""){
      this.datoUsuarioReferencia.icono=this.img;
      this.valueImg='';
      this.img='';
    }
    if(this.pass.localeCompare(this.passRep)==0 && this.pass!='' && this.passRep!=''){
      this.datoUsuarioReferencia.clave=this.pass;
    }
    this.modalService.dismissAll(EditarUsuarioComponent);
    this.flagPassUser=false;
  }

  cerrar(){
    this.modalService.dismissAll(EditarUsuarioComponent);
    this.flagPassUser=false;
  }
  comprobar(){
    if(this.clave.localeCompare(this.datoUsuarioValor.clave)==0) this.flagPassUser=true;

    this.limpiar();
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
