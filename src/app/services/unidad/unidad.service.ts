import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {
  url:string = "http://127.0.0.1:8000/miniApi/unidad/";

  constructor(private http:HttpClient) { }

  get(id:number):Observable<any>{
    let url = this.url + id;
    return this.http.get(url);
  }

  list():Observable<any>{
    return this.http.get(this.url);
  }
}
