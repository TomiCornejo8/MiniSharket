import { Producto } from "./producto.model";

export class RegistroProducto{
    cant:number;
    nombre:string;
    precio:number;
    unidad:string;
    producto:Producto;

    constructor(cant:number,nombre:string,precio:number,unidad:string,producto:Producto = new Producto("","",0,0)){
        this.cant = cant;
        this.nombre = nombre;
        this.precio = precio;
        this.unidad = unidad;
        this.producto = producto;
    }
}