import { Component,OnInit  } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/producto.model';
import { RegistroFinanciero } from 'src/app/models/registroFinanciero.model';
import { RegistroProducto } from 'src/app/models/registroProducto.model';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { UnidadService } from 'src/app/services/unidad/unidad.service';


@Component({
  selector: 'app-productos-screen',
  templateUrl: './productos-screen.component.html',
  styleUrls: ['./productos-screen.component.sass']
})
export class ProductosScreenComponent implements OnInit{
  filtroActivo={nombre:"alfa" ,sentido:"az"};
  w=window.sessionStorage;
  productos:Producto[] =[];
  categorias:Categoria[] = [];

  carrito:RegistroFinanciero = new RegistroFinanciero("Venta");
  cant:number = 0;

  constructor(private productoService:ProductoService,
    private categoriaService:CategoriaService){}

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
    this.sortAlfa(1);
    
    let dataSesion = sessionStorage.getItem('usuario');
    if(dataSesion){
      let minimarket = JSON.parse(dataSesion || "[]").id;
      this.categoriaService.list(minimarket).subscribe(data =>{
        this.categorias = data;
      });
    }
  }


   sortAlfa(sentido?:number){
    // cuando el valor es 1 es de A==>Z
    if(sentido === 1){
      this.productos.sort((x:Producto,y:Producto) =>{
        return x.nombre.localeCompare(y.nombre) ;
    })
    }
    // cuando el valor es distinto de 1 es de Z==>A
    else{
      this.productos.sort((x:Producto,y:Producto) =>{
        return y.nombre.localeCompare(x.nombre) ;
    })
    }
   }

   sortRank(sentido?:number){
      if( sentido === 1){
        this.productos.sort((x:Producto,y:Producto) =>{
          return (x.nVentas > y.nVentas) ?  1 :-1 ;
      });
      }
      else{
        this.productos.sort((x:Producto,y:Producto) =>{
          return (x.nVentas > y.nVentas) ?  -1 :1 ;
      });
      }
   }

   filtroProductos(filtro:string) {
    if(filtro === "rank"){
        if(this.filtroActivo.nombre!=="rank"){
          this.sortRank(1);
          this.filtroActivo.sentido="mayor";
        }
        else{
              if(this.filtroActivo.nombre==="rank" && this.filtroActivo.sentido==="mayor")
              {
                  this.sortRank(2);
                  this.filtroActivo.sentido="menor"; }
            else
                {
                  this.sortRank(1);
                  this.filtroActivo.sentido="mayor"; }
             }
    
      }
    if(filtro === "alfa"){
        if(this.filtroActivo.nombre==="alfa" && this.filtroActivo.sentido==="az"){
            this.sortAlfa(2);
            this.filtroActivo.sentido="za";
        }
        else{
          this.sortAlfa(1);
          this.filtroActivo.sentido="az";
        }
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
  
  //indexof: devuelve la posición del elemento entregado
  //splice: elimina un elemento desde el primer parametro hasta el segundo parametro
  eliminarProductoI(producto:Producto){
      this.productos.splice(this.productos.indexOf(producto),1);  
  }

  crearCategoria(categoria:string){
    let datos = sessionStorage.getItem('usuario');
    let minimarket = JSON.parse(datos || "[]").id;

    let categoriax = new Categoria(0,categoria,minimarket);
    this.categoriaService.post(categoriax).subscribe(data =>{
      // this.categorias.push(data);
    });
  }
}
