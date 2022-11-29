import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrearGastoComponent } from 'src/app/components/crear-gasto/crear-gasto.component';
import { EditarGastoComponent } from 'src/app/components/editar-gasto/editar-gasto.component';
import { Producto } from 'src/app/models/producto.model';
import { Proveedor } from 'src/app/models/proveedor.model';
import { RegistroFinanciero } from 'src/app/models/registroFinanciero.model';
import { RegistroProducto } from 'src/app/models/registroProducto.model';
import { TipoRegistro } from 'src/app/models/tipoRegistro.model';
import { Unidad } from 'src/app/models/unidad.model';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';
import { RegistroFinancieroService } from 'src/app/services/registroFinanciero/registro-financiero.service';
import { RegistroProductoService } from 'src/app/services/registroProducto/registro-producto.service';
import { TipoRegistroService } from 'src/app/services/tipoRegistro/tipo-registro.service';
import { UnidadService } from 'src/app/services/unidad/unidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-finanzas-screen',
  templateUrl: './finanzas-screen.component.html',
  styleUrls: ['./finanzas-screen.component.sass']
})
export class FinanzasScreenComponent implements OnInit {

  registros:RegistroFinanciero[];
  unidades:Unidad[];
  tipo:TipoRegistro[];
  
  constructor(private modalService: NgbModal,
    private registroFinanzasS:RegistroFinancieroService,
    private registroProductoS:RegistroProductoService,
    private tipoRegistroS:TipoRegistroService,
    private unidadS:UnidadService,
    private proveedorService:ProveedorService,
    private productoService:ProductoService){}

  ngOnInit(): void {
    let datos = sessionStorage.getItem('usuario');
    if (!datos) {
      window.location.href = "/inicio";
    }else{
      let minimarket = JSON.parse(datos || "[]").id;
      this.registroFinanzasS.get(minimarket).subscribe(data =>{
        this.registros = (data as RegistroFinanciero[]);

        this.tipoRegistroS.get().subscribe(data =>{
          this.tipo = (data as TipoRegistro[]);

          for(let i=0; i<this.registros.length;i++){
            this.registros[i].tipo = this.tipo.filter(e => e.id.toString() == this.registros[i].tipo)[0].tipo;

            this.registroProductoS.get(this.registros[i].id).subscribe(data =>{
              this.registros[i].lista = (data as RegistroProducto[]);

              this.unidadS.list().subscribe(data =>{
                this.unidades = (data as Unidad[]);

                for(let j=0;j<this.registros[i].lista.length;j++){
                  this.registros[i].lista[j].unidad = this.unidades.filter(e => e.id.toString() == this.registros[i].lista[j].unidad)[0].unidad;
                }
                //console.log(this.registros[i].lista);
              });
            });            
          }
        });
      });
    }
  }
  obtenerProductos(registro:RegistroFinanciero){
    let datos = sessionStorage.getItem('usuario');
    let productosProveedores:Producto[]=[]
    let proveedoresDP :Proveedor[]=[];
    if(datos){
      let minimarket = JSON.parse(datos || "[]").id;
      this.proveedorService.get(minimarket).subscribe(data =>{
        proveedoresDP = (data as Proveedor[]);
        
          proveedoresDP.forEach( provee=>{
          this.productoService.getProveedor(provee .id).subscribe(producto =>{
            productosProveedores= (producto as Producto[]);
            
            registro.lista.forEach(registro =>{
              productosProveedores.forEach(producto =>{
                  if(registro.nombre.localeCompare(producto.nombre) == 0){
                    registro.producto=producto;
                  }
              })
            })
          })
        })
      });     
    }
    return registro;
  }
  abrirModalAgregarGasto(){
      const modalRef=this.modalService.open(CrearGastoComponent,{ size: 'lg' });
     // modalRef.componentInstance.registroReferencia=this.registros;
    
  }
  abrirModalEditarGasto(registro:RegistroFinanciero){
    const modalRef=this.modalService.open(EditarGastoComponent,{ size: 'lg' ,backdrop : 'static',keyboard : false});
    registro=this.obtenerProductos(registro);
   
    
    modalRef.componentInstance.tablaProductosValor=registro;
    modalRef.componentInstance.tablaProductos= JSON.parse(JSON.stringify(registro));

}

  calcularTotal(productos:RegistroProducto[] , tipo :any){
    if(productos != undefined && tipo ==="Venta" ){
      let suma = 0;
      productos.forEach(producto =>{
        suma += producto.cantidad * producto.precio;
      });
      return suma;
    }
    if(productos != undefined && tipo ==="Gasto" ){
      let suma = 0;
      productos.forEach(producto =>{
        suma += producto.precio;
      });
      return suma;
    }
    return 0;
  }

  eliminarRegistro(registro:RegistroFinanciero){
    this.eliminar(registro)    
  }
  eliminar(registro:RegistroFinanciero){  
    registro.montoTotal= this. calcularTotal(registro.lista,registro.tipo) ;
    console.log(registro)
    Swal.fire({ 
      html:
      "<span style='font-size: 33px'>Esta seguro que quiere eliminar el registro con fecha"+"<b> "+registro.fecha+"</b> </span>"+
      "<span style='font-size: 33px'>del tipo"+"<b> "+registro.tipo+"</b> </span>"+
      "<span style='font-size: 33px'>con el siguiente Monto"+"<b> "+registro.montoTotal+"</b> </span>", 
      text: 'No podra ser recuperado',  
      showCancelButton: true,  
      confirmButtonText: 'Si,eliminar',  
      cancelButtonText: 'No,cancelar'  
    }).then((result) => {  
      if (result.value) {  
        this.registros.splice(this.registros.indexOf(registro),1);
        this.registroFinanzasS.delete(registro.id).subscribe();
      } 
    })  
  }  
}
