import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

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

  tipo: number = 1;
  minimarket: string = "";
  codigo: string = "";

  bandera: boolean = false;

  constructor(private sanitizer: DomSanitizer, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('usuario');
    if (datos) {
      window.location.href = "/inicio";
    }
  }

  sesion() {
    this.usuarioService.getNombre(this.usuario).subscribe(data=>{
      if(data.existe == "false"){
        if (this.tipo == 1) {
          this.usuarioService.post(this.usuario, this.clave1, this.img, this.tipo, this.codigo).subscribe(data => {
            sessionStorage.setItem('usuario', JSON.stringify({ "nombre": this.usuario, "icono": this.img, "tipo": this.tipo, "codigo": this.codigo }));
            window.location.href = "/inicio";
          });
        }else{

          this.usuarioService.getCodigo(this.minimarket,this.codigo).subscribe(data=>{
            if(data){
              this.usuarioService.post(this.usuario, this.clave1, this.img, this.tipo, this.codigo,data.id).subscribe(data => {
                sessionStorage.setItem('usuario', JSON.stringify({ "nombre": this.usuario, "icono": this.img, "tipo": this.tipo, "codigo": this.codigo }));
                window.location.href = "/inicio";
              });
            }else{
              alert("Minimarket o codigo no corresponden");
            }
          });
        }
      }else{
        alert(data.existe + " Nombre de usuario ya esta en uso");
      }
    });
  }

  revisar() {
    if (this.usuario == "" || this.clave1 == "" || this.clave2 == "" || this.codigo == "") {
      this.bandera = false;
    } else if (this.tipo == 2) {
      if (this.minimarket == "" || this.codigo == "") {
        this.bandera = false;
      } else {
        this.bandera = true;
      }
    } else {
      this.bandera = true;
    }
  }

  cambioTipo(val: number) {
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
