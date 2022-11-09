import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Existe } from 'src/app/models/existe.model';
import { Id } from 'src/app/models/id.model';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url:string = "http://127.0.0.1:8000/miniApi/usuario/";
  usuario:Usuario;
  existe:boolean;
  id:number;

  constructor(private http:HttpClient) { }

  get(nombre:string,clave:string){
    let url = this.url + nombre + "/" + clave;
   // return this.http.get(url).map((res:Response) => res.json());

      return new Promise(resolve =>{
        this.http.get(url).pipe(take(1)).subscribe(data=>{
          console.log(data);
          let usuario = (data as Usuario)
          if(usuario.icono == "null"){
            usuario.icono = "";
          }else{
            usuario.icono = "http://127.0.0.1:8000" + usuario.icono;
          }
          resolve(usuario)
        });
      });
  }

  getNombre(nombre:string){
    let url = this.url + nombre;
    this.http.get(url).subscribe(data =>{
      this.existe = (data as Existe).existe;
      console.log(data);
    });
    return this.existe;
  }

  getCodigo(nombre:string,codigo:string){
    let url = this.url + "verificar/" + nombre + "/" + codigo;
    this.http.get(url).subscribe(data =>{
      console.log(data);
      this.id = (data as Id).id;
    });
    return this.id;
  }

  post(nombre:string,clave:string,icono:string,tipo:number,codigo:string,minimarket:number = 0){
    let value;
    if(minimarket == 0){
      value = {"nombre":nombre,"clave":clave,"icono":icono,"codigo":codigo,"tipo":tipo};
    }else{
      value = {"nombre":nombre,"clave":clave,"icono":icono,"codigo":codigo,"minimarket":minimarket,"tipo":tipo};
    }
    this.http.post(this.url,value).subscribe(data =>{
      console.log(data);
      this.id = (data as Usuario).id;
    });
    return this.id;
  }
}
