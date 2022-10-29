import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url:string = "http://127.0.0.1:8000/miniApi/categoria/";

  constructor(private http:HttpClient) { }

  list(minimarket:number):Observable<any>{
    this.url = this.url + "minimarket/" + minimarket;
    return this.http.get(this.url);
  }
}
