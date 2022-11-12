import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url:string = "http://127.0.0.1:8000/miniApi/categoria/";

  constructor(private http:HttpClient) { }

  list(minimarket:number):Observable<any>{
    let url = this.url + "minimarket/" + minimarket;
    return this.http.get(url);
  }

  post(categoria:Categoria){
    let value = {"categoria":categoria.categoria,
    "minimarket":categoria.minimarket};
    return this.http.post(this.url,value);
  }

  put(categoria:Categoria){
    let url = this.url + categoria.id;
    let value = {"categoria":categoria.categoria}
    return this.http.put(url,value);
  }

  delete(i:number){
    let url =  this.url + i;
    return this.http.delete(url);
  }
}
