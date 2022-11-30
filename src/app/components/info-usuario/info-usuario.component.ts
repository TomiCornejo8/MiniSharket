import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.sass']
})
export class InfoUsuarioComponent implements OnInit {
  user:Usuario;
  
  trabajadores:Usuario[]=[];
  idBorrar:number = 0;
  minimarket:number;
  banderaAlert:boolean = false;

  constructor(private modalService: NgbModal,
    private usuarioS:UsuarioService){}

  ngOnInit(): void {
    let datos = sessionStorage.getItem('usuario');
    if(datos){
      let icono = JSON.parse(datos || "[]").icono;
      let nombre = JSON.parse(datos || "[]").nombre;
      let tipo = JSON.parse(datos || "[]").tipo;
      let codigo = JSON.parse(datos || "[]").codigo;
      this.minimarket = JSON.parse(datos || "[]").id;
      this.user = new Usuario(nombre,icono,codigo,tipo.toString(),this.minimarket);
      this.listar();
    }
  }

  listar(){
    if(this.user.tipo == '1'){
      this.usuarioS.getVendedores(this.minimarket).subscribe(data =>{
        this.trabajadores = (data as Usuario[]);
      });
    }else{
      this.trabajadores = []
    }
  }

  cerrar(){
    sessionStorage.clear();
    window.location.href="/inicio";
  }
  abrirModalCrearCategoria() {
		const modalRef=this.modalService.open(EditarUsuarioComponent);
    modalRef.componentInstance.datoUsuarioValor=JSON.parse(JSON.stringify(this.user));
    modalRef.componentInstance.datoUsuarioReferencia=this.user;
	} 
  desvincular(trabajador:Usuario){
    this.idBorrar = trabajador.id;
  }

  eliminarCuenta(){
    this.idBorrar = this.minimarket;
  }

  eliminar(validar:boolean){
    if(validar){
      this.usuarioS.delete(this.idBorrar).subscribe(data =>{
        if(this.idBorrar == this.minimarket){
          this.cerrar();
        }else{
          this.listar();
        }
      });
    }else{
      this.banderaAlert = true;
    }
  }
}
