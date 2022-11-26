import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url:string = "http://127.0.0.1:8000/miniApi/email/";

  constructor(private http:HttpClient) { }

  //Listar todos los proveedores
  get(proveedor:number){
    let url = this.url +"proveedor/" + proveedor;
    return this.http.get(url);
  }

  post(email:string,proveedor:number){
    let value = {
      "email":email,
      "proveedor":proveedor
    }
    return this.http.post(this.url, value);
  }

  put(email:string,id:number){
    let url = this.url + id;
    let value = {
      "email":email
    }
    return this.http.put(url, value);
  }

  delete(id:number){
    let url = this.url + id;
    return this.http.delete(url);
  }
}
