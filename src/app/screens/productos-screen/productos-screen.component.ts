import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { RegistroFinanciero } from 'src/app/models/registroFinanciero.model';
import { RegistroProducto } from 'src/app/models/registroProducto.model';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-productos-screen',
  templateUrl: './productos-screen.component.html',
  styleUrls: ['./productos-screen.component.sass']
})
export class ProductosScreenComponent implements OnInit{
 @Input() productoEditarr:Producto;
 productoAEliminar:Producto;
 prodEditado:any;
  w=window.sessionStorage;
  productos:Producto[] =
  [
    new Producto("Queso mantecoso","Unidad",40,1,"Calo"),
    new Producto("Jamon","Unidad",25,1,"San Jorge"),
    new Producto("Palta","Kilogramo",50,1,"La feria")
  ];

  carrito:RegistroFinanciero = new RegistroFinanciero("Venta");
  cant:number = 0;

  constructor(private productoService:ProductoService) {
  /*  let datos = sessionStorage.getItem('usuario');
    if(datos){
      let minimarket = JSON.parse(datos || "[]").id; //Se obtiene el id del usuario logueado
      productoService.get(minimarket).subscribe(data=>{
        this.productos = data;
      });
    }else{
      window.location.href="/inicio";
    }
*/
   }
 

  ngOnInit(): void {
    
  }

  crearProducto(producto:Producto){
    this.productos.push(producto);
    this.w.setItem("arrayProductos",JSON.stringify(this.productos));
  }


  agregarCarrito(producto:Producto){
    this.carrito.lista.push(new RegistroProducto(1,producto.nombre,producto.precio,producto.unidad,producto));
    this.carrito.montoTotal += producto.precio;
    this.cant++;
  }

  quitarCarrito(){
    this.cant--;
  }
  editarProducto(producto:any){
    this.productoEditarr=producto;

  }
  productoEditado(producto:any){
    this.productoEditarr=producto;
  }
  
  //indexof: devuelve la posición del elemento entregado
  //splice: elimina un elemento desde el primer parametro hasta el segundo parametro
  eliminarProductoI(producto:Producto){
      this.productos.splice(this.productos.indexOf(producto),1);  
  }
  guardarProductoActivo(producto:any){
    this.productoAEliminar=producto;
  }
}
