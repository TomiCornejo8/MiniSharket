import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.sass']
})
export class EditarCategoriaComponent implements OnInit {
  categoriaReferencia:Categoria;
  categoriaValor:Categoria;
  constructor(private modalService: NgbModal,
    private categoriaService:CategoriaService){}

  ngOnInit(): void {
  }
  editar(categoria:string){
    this.categoriaReferencia.categoria=categoria;
    this.categoriaService.put(this.categoriaReferencia).subscribe(data=>{
      this.modalService.dismissAll(EditarCategoriaComponent);
    });
  }
  cancelar(){
    this.modalService.dismissAll(EditarCategoriaComponent);
  }
}
