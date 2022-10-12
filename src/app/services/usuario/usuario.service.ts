import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url:string = "http://127.0.0.1:8000/miniApi/usuario/";

  constructor(private http:HttpClient) { }

  get(nombre:string,clave:string):Observable<any>{
    let url = this.url + nombre + "/" + clave;
    return this.http.get(url);
  }

  post(){

  }
}
