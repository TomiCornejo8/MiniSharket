import { EmailValidator } from "@angular/forms";

export class Proveedor{
    id:number;
    nombre:string;
    email:string[];
    numero:string[];

    constructor(nombre?:string,email?:string[],numero?:string[],id:number = 0){
        this.nombre = nombre ==null ? '': nombre;
        this.email = email ==null ? ['']: email;
        this.numero = numero ==null ? ['']: numero;
        this.id = id;
    }
}