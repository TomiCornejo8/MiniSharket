import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
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
  categorias:Categoria[];
  tipo:boolean;

  constructor(private modalService: NgbModal,
    private categoriaService:CategoriaService) { }

  ngOnInit(): void {
    let data = sessionStorage.getItem('usuario');
    if(data){
      let minimarket = JSON.parse(data || "[]").id;
      if(JSON.parse(data || "[]").tipo == 1){
        this.tipo = true;
      }else{
        this.tipo = false;
      }
      this.categoriaService.list(minimarket).subscribe(data =>{
        this.categorias = (data as Categoria[]);
      });
    }
    
  }

  enviarCategoria(id:number){
    
  }

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
        this.categoriaService.delete(categoria.id).subscribe(data=>{
          console.log(data);
          this.categorias.splice(this.categorias.indexOf(categoria),1);
        });
      } 
    })  
  }  
}
