import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroFinanciero } from 'src/app/models/registroFinanciero.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroFinancieroService {
  url:string = "http://127.0.0.1:8000/miniApi/registroFinanciero/";

  constructor(private http:HttpClient) { }

  post(registro:RegistroFinanciero){
    let value = {"tipo":registro.tipo,
    "minimarket":registro.minimarket}
    return this.http.post(this.url,value);
  }
}
