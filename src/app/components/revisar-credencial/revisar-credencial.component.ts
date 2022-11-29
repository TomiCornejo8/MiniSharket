import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-revisar-credencial',
  templateUrl: './revisar-credencial.component.html',
  styleUrls: ['./revisar-credencial.component.sass']
})
export class RevisarCredencialComponent implements OnInit {

  @Output() validar = new EventEmitter<boolean>();
  clave:string = "";
  bandera:boolean = false;
  

  constructor(private usuarioS:UsuarioService){}

  ngOnInit(): void {
  }

  limpiar(){
    this.clave = "";
  }

  validarVacio(){
    if(this.clave == ""){
      this.bandera = false;
    }else{
      this.bandera = true;
    }
  }

  revisarClave(){
    let datos = sessionStorage.getItem('usuario');
    let nombre = JSON.parse(datos || "[]").nombre;
    this.usuarioS.get(nombre,this.clave).subscribe(data =>{
      if(data){
        this.validar.emit(true);
      }else{
        this.validar.emit(false);
      }
      this.limpiar();
      this.validarVacio();
    });
  }

}
