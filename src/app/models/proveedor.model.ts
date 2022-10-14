import { EmailValidator } from "@angular/forms";

export class Proveedor{
    nombre:string;
    email:string[];
    numero:string[];

    constructor(nombre?:string,email?:string[],numero?:string[]){
        this.nombre = nombre ==null ? '': nombre;
        this.email = email ==null ? ['']: email;
        this.numero = numero ==null ? ['']: numero;

    }
}