import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url:string = "http://127.0.0.1:8000/miniApi/producto/";

  constructor(private http:HttpClient) { }

  get(minimarket:string):Observable<any>{
    let url = this.url + minimarket;
    return this.http.get(url);
  }

  post(producto:Producto){
    let value = {};
    return this.http.post(this.url,value);
  }
  
}
