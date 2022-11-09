export class Usuario{
    id:number;
    nombre:string;
    clave:string;
    icono:string;
    codigo:string;
    minimarket:number;
    tipo:string;

    constructor(nombre:string="",clave:string="",icono:string="",codigo:string="",minimarket:number=0,tipo:string="",id:number=0){
        this.nombre = nombre;
        this.clave = clave;
        this.icono = icono;
        this.codigo = codigo;
        this.minimarket = minimarket;
        this.tipo = tipo;
        this.id = id;
    }
}