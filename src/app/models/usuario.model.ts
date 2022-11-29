export class Usuario{
    id:number;
    nombre:string;
    clave:string;
    icono:string;
    codigo:string;
    minimarket:number;
    tipo:string;

    constructor(nombre:string,icono:string,codigo:string,tipo:string,id:number = 0,minimarket:number = 0,clave:string = ""){
        this.nombre = nombre;
        this.clave = clave;
        this.icono = icono;
        this.codigo = codigo;
        this.minimarket = minimarket;
        this.tipo = tipo;
        this.id = id;
    }
}