import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { RegistroFinanciero } from 'src/app/models/registroFinanciero.model';
import { RegistroProducto } from 'src/app/models/registroProducto.model';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { UnidadService } from 'src/app/services/unidad/unidad.service';

@Component({
  selector: 'app-productos-screen',
  templateUrl: './productos-screen.component.html',
  styleUrls: ['./productos-screen.component.sass']
})
export class ProductosScreenComponent implements OnInit{
 @Input() productoEditarr:Producto;
 productoAEliminar:Producto;
 banderaEliminarProducto:boolean;
 prodEditado:any;
  w=window.sessionStorage;
  productos:Producto[] = [];
  /*[
    new Producto("Queso mantecoso","Unidad",40,1,"Calo"),
    new Producto("Jamon","Unidad",25,1,"San Jorge"),
    new Producto("Palta","Kilogramo",50,1,"La feria")
  ];*/

  carrito:RegistroFinanciero = new RegistroFinanciero("Venta");
  cant:number = 0;

  constructor(private productoService:ProductoService){}

  ngOnInit(): void {
    let datos = sessionStorage.getItem('usuario');
    if(datos){
      let minimarket = JSON.parse(datos || "[]").id; //Se obtiene el id del usuario logueado
      this.productoService.get(minimarket).subscribe(data=>{
        this.productos = data;
      });
    }else{
      window.location.href="/inicio";
    }
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
  eliminarProductoBandera(respuesta:any){
    this.banderaEliminarProducto=respuesta;
    if(respuesta===false){
      this.productoAEliminar=new Producto();
    }
    
  }

  //indexof: devuelve la posición del elemento entregado
  //splice: elimina un elemento desde el primer parametro hasta el segundo parametro
  eliminarProductoI(producto:Producto){
    console.log(this.productoAEliminar ===producto);
    if(this.productoAEliminar ===producto){
      this.productos.splice(this.productos.indexOf(producto),1);  
      this.productoAEliminar=new Producto();
      console.log(this.productos);
    }
      
  
  }
  guardarProductoActivo(producto:any){
    this.productoAEliminar=producto;
  }
}
