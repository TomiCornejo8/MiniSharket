import { RegistroProducto } from "./registroProducto.model";

export class RegistroFinanciero{
    tipo:string;
    fecha:string;
    lista:RegistroProducto[];
    montoTotal:number;

    constructor(tipo:string,fecha:string = "",lista:RegistroProducto[] = [],montoTotal:number = 0){
        this.tipo = tipo;
        this.fecha = fecha;
        this.lista = lista;
        this.montoTotal = montoTotal;
    }
}