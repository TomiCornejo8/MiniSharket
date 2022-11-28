import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroFinanciero } from 'src/app/models/registroFinanciero.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroFinancieroService {
  url:string = "http://127.0.0.1:8000/miniApi/registroFinanciero/";

  constructor(private http:HttpClient) { }

  get(minimarket: number){
    let url = this.url + "minimarket/" + minimarket;
    return this.http.get(url);
  }

  post(tipo:string,minimarket:number){
    let value = {"tipo":tipo,
    "minimarket":minimarket}
    return this.http.post(this.url,value);
  }

  put(fecha:string,id:number){
    let url = this.url + id;
    let value = {
      "fecha":fecha
    }
    return this.http.put(url, value);
  }

  delete(id:number){
    let url = this.url + id;
    return this.http.delete(url);
  }
}
