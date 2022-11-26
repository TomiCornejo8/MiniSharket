import { Email } from "./email.model";
import { Telefono } from "./telefono.model";

export class Proveedor{
    id:number;
    nombre:string;
    email:Email[];
    numero:Telefono[];
    minimarket:number;

    constructor(nombre?:string,email?:Email[],numero?:Telefono[],id:number = 0,minimarket:number = 0){
        this.nombre = nombre ==null ? '': nombre;
        this.email = email ==null ? []: email;
        this.numero = numero ==null ? []: numero;
        this.id = id;
        this.minimarket = minimarket;
    }
}