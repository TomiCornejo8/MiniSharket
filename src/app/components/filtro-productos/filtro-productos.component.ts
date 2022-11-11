import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/models/categoria.model';
import Swal from 'sweetalert2';
import { CrearCategoriaComponent } from '../crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from '../editar-categoria/editar-categoria.component';

@Component({
  selector: 'app-filtro-productos',
  templateUrl: './filtro-productos.component.html',
  styleUrls: ['./filtro-productos.component.sass']
})
export class FiltroProductosComponent implements OnInit {
  @Output() enviarFiltro=new EventEmitter<string>;
  categorias:Categoria[] = [new Categoria(1,"C1"),new Categoria(2,"C2"),new Categoria(3,"C3")];
  Hola:any;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    sessionStorage.setItem('categoriasProductos',JSON.stringify(this.categorias));
  }
/*
  crearCategoria(categoria:string){
    this.categorias.push(categoria);
    sessionStorage.setItem('categoriasProductos',JSON.stringify(this.categorias));
  }*/

  filtroActual(value:string){
    this.enviarFiltro.emit(value);
  }
  abrirModalCrearCategoria() {
		const modalRef=this.modalService.open(CrearCategoriaComponent);
    modalRef.componentInstance.categoriasReferencia=this.categorias;
	}
  abrirModalEditarCategoria(categoria:Categoria) {
		const modalRef=this.modalService.open(EditarCategoriaComponent);
    modalRef.componentInstance.categoriaValor=JSON.parse(JSON.stringify(this.categorias[this.categorias.indexOf(categoria)]));
    modalRef.componentInstance.categoriaReferencia=this.categorias[this.categorias.indexOf(categoria)];

	}
  eliminar(categoria:Categoria){  
    Swal.fire({ 
      html:
      "<span style='font-size: 33px'>Esta seguro que quiere eliminar el proveedor "+"<b>"+this.categorias[this.categorias.indexOf(categoria)].categoria+"</b> </span>", 
      text: 'No podra ser recuperado',  
      showCancelButton: true,  
      confirmButtonText: 'Si,eliminar',  
      cancelButtonText: 'No,cancelar'  
    }).then((result) => {  
      if (result.value) {  
        this.categorias.splice(this.categorias.indexOf(categoria),1);
      } 
    })  
  }  
}
