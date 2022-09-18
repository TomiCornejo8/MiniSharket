export class Producto{
    nombre:string;
    unidad:string;
    stock:number;
    cantVenta:number;
    precio:number;
    proveedor:string;
    categorias:string[];
    img:string;

    constructor(nombre:string,unidad:string,stock:number,cantVenta:number,precio:number,proveedor:string = "",categorias:string[] = [],img:string = ""){
        //Campos obligatorios
        this.nombre = nombre;
        this.unidad = unidad;
        this.stock = stock;
        this.cantVenta = cantVenta;
        this.precio = precio;

        //Campos opcionales
        this.proveedor = proveedor;
        this.categorias = categorias;
        this.img = img;
    }
}