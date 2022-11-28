import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrearGastoComponent } from 'src/app/components/crear-gasto/crear-gasto.component';
import { RegistroFinanciero } from 'src/app/models/registroFinanciero.model';
import { RegistroProducto } from 'src/app/models/registroProducto.model';
import { TipoRegistro } from 'src/app/models/tipoRegistro.model';
import { Unidad } from 'src/app/models/unidad.model';
import { RegistroFinancieroService } from 'src/app/services/registroFinanciero/registro-financiero.service';
import { RegistroProductoService } from 'src/app/services/registroProducto/registro-producto.service';
import { TipoRegistroService } from 'src/app/services/tipoRegistro/tipo-registro.service';
import { UnidadService } from 'src/app/services/unidad/unidad.service';

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
    private unidadS:UnidadService){}

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
                console.log(this.registros[i].lista);
              });
            });            
          }
        });
      });
    }
  }
  abrirModalAgregarGasto(){
      const modalRef=this.modalService.open(CrearGastoComponent,{ size: 'lg' });
     // modalRef.componentInstance.proveedorActual=JSON.parse(JSON.stringify(this.proveedor));
      //modalRef.componentInstance.proveedorReferencia=this.proveedor;
    
  }

  calcularTotal(productos:RegistroProducto[]){
    let suma = 0;
    productos.forEach(producto =>{
      suma += producto.cantidad * producto.precio;
    });
    return suma;
  }
}
