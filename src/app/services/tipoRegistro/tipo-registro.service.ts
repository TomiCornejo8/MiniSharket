import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoRegistroService {
  url:string = "http://127.0.0.1:8000/miniApi/tiporegistro/";

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get(this.url);
  }
}
