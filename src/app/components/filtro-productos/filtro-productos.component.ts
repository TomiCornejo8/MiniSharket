import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'app-filtro-productos',
  templateUrl: './filtro-productos.component.html',
  styleUrls: ['./filtro-productos.component.sass']
})
export class FiltroProductosComponent implements OnInit {
  @Output() enviarFiltro=new EventEmitter<string>;
  @Input() categorias:Categoria[] = [];

  constructor(private categoriaService:CategoriaService){}

  ngOnInit(): void {}

  filtroActual(value:string){
    this.enviarFiltro.emit(value);
  }

}
