export class Venta{
    fecha:string;
    productos:string[];
    monto:number;
    metodoPago:string;

    constructor(fecha:string,productos:string[],monto:number,metodoPago:string){
        this.fecha = fecha;
        this.productos = productos;
        this.monto = monto;
        this.metodoPago = metodoPago;
    }
}