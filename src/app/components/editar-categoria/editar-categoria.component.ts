import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.sass']
})
export class EditarCategoriaComponent implements OnInit {
  categoriaReferencia:Categoria;
  categoriaValor:Categoria;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  editar(categoria:string){
    this.categoriaReferencia.categoria=categoria;
    console.log(categoria);
    this.modalService.dismissAll(EditarCategoriaComponent);
}
  cancelar(){
    this.modalService.dismissAll(EditarCategoriaComponent);
  }
}
