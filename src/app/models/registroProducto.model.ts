import { Producto } from "./producto.model";

export class RegistroProducto{
    cantidad:number;
    nombre:string;
    precio:number;
    unidad:string;
    producto:Producto;

    constructor(cantidad:number,nombre:string,precio:number,unidad:string,producto:Producto = new Producto("","",0,0)){
        this.cantidad = cantidad;
        this.nombre = nombre;
        this.precio = precio;
        this.unidad = unidad;
        this.producto = producto;
    }
}