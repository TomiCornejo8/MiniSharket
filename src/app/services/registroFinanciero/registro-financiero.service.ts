import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroFinanciero } from 'src/app/models/registroFinanciero.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroFinancieroService {
  url:string = "http://127.0.0.1:8000/miniApi/registroFinanciero/";

  constructor(private http:HttpClient) { }

  post(tipo:string,minimarket:number){
    let value = {"tipo":tipo,
    "minimarket":minimarket}
    return this.http.post(this.url,value);
  }
}
