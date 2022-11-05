export class Producto{
    id:number;
    nombre:string;
    unidad:string;
    stock:number;
    precio:number;
    proveedor:string;
    categorias:string[];
    img:string;
    banderaCarrito:boolean;
    nVentas:number;
    minimarket:number;

    constructor(nombre?:string,unidad?:string,stock?:number,precio?:number,proveedor:string = "",categorias:string[] = [],img:string = "",banderaCarrito = false,nVentas:number=0,minimarket:number = -1,id:number = 0){
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
        this.nVentas = nVentas;
        this.minimarket = minimarket;
        this.id = id;
    }
    
}