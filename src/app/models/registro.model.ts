import { Producto } from "./producto.model";

export class Registro{
    fecha:string;
    tipo:string;
    lista:Producto[];
    total:number;

    constructor(fecha:string,tipo:string,lista:Producto[],total:number){
        this.fecha = fecha;
        this.tipo = tipo;
        this.lista = lista;
        this.total = total;
    }
}