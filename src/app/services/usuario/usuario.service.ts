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

  getNombre(nombre:string){
    let url = this.url + nombre;
    return this.http.get(url);
  }

  post(nombre:string,clave:string,icono:string,tipo:number,codigo:string,minimarket:number = 0){
    let value;
    if(minimarket == 0){
      value = {"nombre":nombre,"clave":clave,"icono":icono,"codigo":codigo,"tipo":tipo};
    }else{
      value = {"nombre":nombre,"clave":clave,"icono":icono,"codigo":codigo,"minimarket":minimarket,"tipo":tipo};
    }
    return this.http.post(this.url,value);
  }
}
