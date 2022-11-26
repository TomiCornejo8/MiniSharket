import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelefonoService {
  url:string = "http://127.0.0.1:8000/miniApi/telefono/";

  constructor(private http:HttpClient) { }

  //Listar todos los proveedores
  get(proveedor:number){
    let url = this.url +"proveedor/" + proveedor;
    return this.http.get(url);
  }

  post(telefono:string,proveedor:number){
    let value = {
      "telefono":telefono,
      "proveedor":proveedor
    }
    return this.http.post(this.url, value);
  }

  put(telefono:string,id:number){
    let url = this.url + id;
    let value = {
      "telefono":telefono
    }
    return this.http.put(url, value);
  }

  delete(id:number){
    let url = this.url + id;
    return this.http.delete(url);
  }
}
