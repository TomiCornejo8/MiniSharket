export class Usuario{
    id:number;
    nombre:string;
    clave:string;
    icono:string;
    codigo:string;
    minimarket:number;
    tipo:string;

    constructor(nombre:string,clave:string,icono:string,codigo:string,minimarket:number,tipo:string){
        this.nombre = nombre;
        this.clave = clave;
        this.icono = icono;
        this.codigo = codigo;
        this.minimarket = minimarket;
        this.tipo = tipo;
    }
}