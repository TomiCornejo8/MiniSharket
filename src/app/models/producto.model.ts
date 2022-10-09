export class Producto{
    nombre:string;
    unidad:string;
    stock:number;
    precio:number;
    proveedor:string;
    categorias:string[];
    img:string;
    banderaCarrito:boolean;

    constructor(nombre?:string,unidad?:string,stock?:number,precio?:number,proveedor:string = "",categorias:string[] = [],img:string = "",banderaCarrito = false){
        //Campos obligatorios
        this.nombre = nombre == null? "" : nombre;
        this.unidad = unidad == null ? "" : unidad;
        this.stock = stock == null ? 0 : stock;
        this.precio = precio == null ? 0 : precio;

        //Campos opcionales
        this.proveedor = proveedor;
        this.categorias = categorias;
        this.img = img;
        this.banderaCarrito = banderaCarrito;
    }
    
}