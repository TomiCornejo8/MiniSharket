import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.sass']
})
export class CrearCategoriaComponent implements OnInit {

  categoria:string = "";
  categoriasReferencia:any=[];
  @Output() crearCategoria = new EventEmitter<string>();

  constructor(private modalService: NgbModal,
    private categoriaService:CategoriaService){}

  ngOnInit(): void {
  }

  crear(){
    let dataSesion = sessionStorage.getItem('usuario');
    let minimarket = JSON.parse(dataSesion || "[]").id;
    let categoria = new Categoria(0,this.categoria,minimarket);
    this.categoriaService.post(categoria).subscribe(data=>{
      categoria.id = (data as Categoria).id;
      this.categoriasReferencia.push(categoria);
      this.modalService.dismissAll(CrearCategoriaComponent);
    });
  }
  cerrar(){
    this.modalService.dismissAll(CrearCategoriaComponent);
  }
  
}
