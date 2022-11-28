export class TipoRegistro{
    id:number;
    tipo:string;
    constructor(tipo:string,id:number = 0){
        this.id = id;
        this.tipo = tipo;
    }
}