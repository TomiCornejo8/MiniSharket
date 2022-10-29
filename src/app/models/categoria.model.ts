export class Categoria{
    id:number;
    categoria:string;
    minimarket:number;

    constructor(id:number,categoria:string,minimarket:number = 0){
        this.id = id;
        this.categoria = categoria;
        this.minimarket = minimarket;
    }
}