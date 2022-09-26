import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    let localStore= window.sessionStorage;
    let flagEliminarProducto=false;
    let flagEliminarProveedor=false;
    let flagEliminarCategoria=false;
    let flagEditarProducto=false;
    let categoriaProducto={};
    let ordenTarjetaProducto="";
    localStore.setItem("flagEliminarProducto",JSON.stringify(flagEliminarProducto));
    localStore.setItem("flagEliminarProveedor",JSON.stringify(flagEliminarProveedor));
    localStore.setItem("flagEliminarCategoria",JSON.stringify(flagEliminarCategoria));
    localStore.setItem("categoriaProducto",JSON.stringify(categoriaProducto));
    localStore.setItem("ordenTarjetaProducto",JSON.stringify(ordenTarjetaProducto));
    localStore.setItem("ordenTarjetaProducto",JSON.stringify(flagEditarProducto));
  }
  title = 'MiPymeApp';
}
