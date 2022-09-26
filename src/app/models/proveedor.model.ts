import { EmailValidator } from "@angular/forms";

export class Proveedor{
    nombre:string;
    email:string[];
    numero:string[];

    constructor(nombre:string,email:string[],numero:string[]){
        this.nombre = nombre;
        this.email = email;
        this.numero = numero;

    }
}