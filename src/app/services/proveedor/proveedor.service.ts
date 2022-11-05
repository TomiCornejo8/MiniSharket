import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from 'src/app/models/proveedor.model';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  url:string = "http://127.0.0.1:8000/miniApi/proveedor/";

  constructor(private http:HttpClient) { }

  //Listar todos los proveedores
  get(minimarket:number):Observable<any>{
    let url = this.url +"minimarket/" + minimarket;
    return this.http.get(url);
  }

  post(proveedor:Proveedor){
    // let value = {"nombre":producto.nombre,
    // "stock":producto.stock,
    // "precio":producto.precio,
    // "nVentas":producto.nVentas,
    // "img":producto.img,
    // "minimarket":producto.minimarket,
    // "unidad":producto.unidad,
    // "categorias":producto.categorias};
    // return this.http.post(this.url,value);
  }
}
