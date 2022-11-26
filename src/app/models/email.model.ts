export class Email{
    id:number;
    email:string;
    proveedor:number;
    constructor(id:number,email:string,proveedor:number){
        this.id = id;
        this.email = email;
        this.proveedor = proveedor;
    }
}