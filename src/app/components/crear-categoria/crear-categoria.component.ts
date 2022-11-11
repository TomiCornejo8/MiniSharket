import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.sass']
})
export class CrearCategoriaComponent implements OnInit {

  categoria:string = "";
  categoriasReferencia:any=[];
  @Output() crearCategoria = new EventEmitter<string>();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  crear(){
    this.categoriasReferencia.push(new Categoria(this.categoriasReferencia.lenght,this.categoria));
    this.modalService.dismissAll(CrearCategoriaComponent);
  }
  cerrar(){
    this.modalService.dismissAll(CrearCategoriaComponent);
  }
  
}
