import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.sass']
})
export class TarjetaProductoComponent implements OnInit {

  @Output() eliminarProducto = new EventEmitter<Producto>();
  @Input() producto:Producto;
  w=window.sessionStorage;
  constructor() { }

  ngOnInit(): void {
  }
  eliminar(){
    let eliminar=this.eliminarProducto;
    let producto=this.producto;
    setTimeout(function(){
      eliminar.emit(producto);
    },2500);
  }
  editarProducto(){
  let intervaloEditarProducto=setInterval(()=>{
      let stringEditarProducto='flagEditarProducto';
      let stringProducto='Producto';
      let varProducto= this.w.getItem(stringProducto);
      let flagEditarProducto= this.w.getItem(stringEditarProducto);
      if(flagEditarProducto!==null){
        let flagEditar = JSON.parse(flagEditarProducto);
          if(flagEditar===true && varProducto!==null)
          {
            let valoresEditados = JSON.parse(varProducto);

            for(let i=0;i<valoresEditados.lenght;i++){
                  if(valoresEditados[i]===null){
                      switch(i){
                              case  0:{
                                this.producto.nombre=valoresEditados[i];
                                break;  
                              }
                              case  1:{
                                this.producto.categorias=valoresEditados[i]; 
                                break;   
                              }
                              case  2:{
                                this.producto.stock=valoresEditados[i]; 
                                break;   
                                  }
                              case  3:{
                                this.producto.precio=valoresEditados[i]; 
                                break;   
                                }
                              case  4:{
                                this.producto.img=valoresEditados[i];  
                                break;  
                                }
                            }
                  }
            }
            clearInterval(intervaloEditarProducto);
          }
          
        }
      }
    ,2500);
  }
    
}
