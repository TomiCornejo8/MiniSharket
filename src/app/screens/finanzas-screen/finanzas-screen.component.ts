import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrearGastoComponent } from 'src/app/components/crear-gasto/crear-gasto.component';

@Component({
  selector: 'app-finanzas-screen',
  templateUrl: './finanzas-screen.component.html',
  styleUrls: ['./finanzas-screen.component.sass']
})
export class FinanzasScreenComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('usuario');
/*
    if (!datos) {
      window.location.href = "/inicio";
    }
*/
  }
  abrirModalAgregarGasto(){
      const modalRef=this.modalService.open(CrearGastoComponent,{ size: 'lg' });
     // modalRef.componentInstance.proveedorActual=JSON.parse(JSON.stringify(this.proveedor));
      //modalRef.componentInstance.proveedorReferencia=this.proveedor;
    
  }
}
