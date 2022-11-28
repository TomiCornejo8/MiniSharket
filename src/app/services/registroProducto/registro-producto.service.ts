import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroProducto } from 'src/app/models/registroProducto.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroProductoService {
  url:string = "http://127.0.0.1:8000/miniApi/registroProducto/";

  constructor(private http:HttpClient) { }

  get(registroFinanciero: number){
    let url = this.url + "registroFinanciero/" + registroFinanciero;
    return this.http.get(url);
  }

  post(registro:RegistroProducto,registroFinanciero:number){
    let value = { "cantidad":registro.cantidad,
    "nombre":registro.nombre,
    "precio":registro.precio,
    "unidad":registro.unidad,
    "registroFinanciero":registroFinanciero}
    return this.http.post(this.url,value);
  }
}
