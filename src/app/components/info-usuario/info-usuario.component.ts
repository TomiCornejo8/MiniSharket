import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario.model';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.sass']
})
export class InfoUsuarioComponent implements OnInit {
  user:Usuario=new Usuario("manuel","123","","",123,"1");
  icono:string = "";
  nombre:string = "";
  tipo:number = 0;
  codigo:string = "";
  trabajadores:Usuario[]=[];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('usuario');
    if(datos){
      this.icono = JSON.parse(datos || "[]").icono;
      this.nombre = JSON.parse(datos || "[]").nombre;
      this.tipo = JSON.parse(datos || "[]").tipo;
      this.codigo = JSON.parse(datos || "[]").codigo;
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
    
  }
}
