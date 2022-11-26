import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroProducto } from 'src/app/models/registroProducto.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroProductoService {
  url:string = "http://127.0.0.1:8000/miniApi/registroFinanciero/";

  constructor(private http:HttpClient) { }

  /*
    cantidad = models.IntegerField()
    nombre = models.CharField(max_length=100)
    precio = models.IntegerField()
    unidad = models.ForeignKey(Unidad,on_delete=models.CASCADE)
    registroFinanciero = models.ForeignKey(RegistroFinanciero,on_delete=models.CASCADE)
   */

  post(registro:RegistroProducto,registroFinanciero:number){
    let value = { "cantidad":registro.cantidad,
    "nombre":registro.producto,
    "precio":registro.precio,
    "unidad":registro.unidad,
    "registroFinanciero":registroFinanciero}
    return this.http.post(this.url,value);
  }
}
