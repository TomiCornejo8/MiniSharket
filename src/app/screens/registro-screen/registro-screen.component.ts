import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.sass']
})
export class RegistroScreenComponent implements OnInit {

  usuario: string = "";
  clave1: string = "";
  clave2: string = "";
  img: string = "";
  
  tipo:string = "Minimarket";
  minimarket:string = "";
  codigo:string = "";

  bandera:boolean = false;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  sesion(){
    sessionStorage.setItem('usuario',JSON.stringify({"nombre":this.usuario,"icono":this.img,"tipo":this.tipo}));
    
  }

  revisar(){
    if(this.usuario == "" || this.clave1 == "" || this.clave2 == ""){
      this.bandera = false;
    }else if(this.tipo == "Vendedor"){
      if(this.minimarket == "" || this.codigo == ""){
        this.bandera = false;
      }else{
        this.bandera = true;
      }
    }else{
      this.bandera = true;
    }
  }

  cambioTipo(val:string){
    this.tipo = val;
    this.revisar();
  }

  // Obtiene la imagen de html
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
