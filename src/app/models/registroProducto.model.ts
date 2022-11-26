import { Producto } from "./producto.model";

export class RegistroProducto{
    id:number;
    cantidad:number;
    nombre:string;
    precio:number;
    unidad:string;
    producto:Producto;
    registroFinanciero:number;

    constructor(cantidad:number=0,nombre:string,precio:number,unidad:string,producto:Producto = new Producto("","",0,0),registroFinanciero:number = 0,id = 0){
        this.cantidad = cantidad;
        this.nombre = nombre;
        this.precio = precio;
        this.unidad = unidad;
        this.producto = producto;
        this.registroFinanciero = registroFinanciero;
        this.id = id;
    }
}