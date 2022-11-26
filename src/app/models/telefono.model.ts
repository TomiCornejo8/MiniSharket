export class Telefono{
    id:number;
    telefono:string;
    proveedor:number;
    constructor(id:number,telefono:string,proveedor:number){
        this.id = id;
        this.telefono = telefono;
        this.proveedor = proveedor;
    }
}