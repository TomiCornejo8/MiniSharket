import { RegistroProducto } from "./registroProducto.model";

export class RegistroFinanciero{
    /*
    fecha = models.DateField(auto_now=True)
    tipo = models.ForeignKey(TipoRegistro,on_delete=models.DO_NOTHING)
    minimarket = models.ForeignKey(Usuario,on_delete=models.CASCADE)
     */
    id:number;
    minimarket:number;
    tipo:string;
    fecha:string;
    lista:RegistroProducto[];
    montoTotal:number;

    constructor(tipo?:string,fecha?:string ,lista?:RegistroProducto[] ,montoTotal?:number ,minimarket?:number , id?:number ){
        this.tipo = tipo != null ? tipo: '';
        this.fecha = fecha != null ? fecha: '';
        this.lista = lista != null ? lista: [];
        this.montoTotal = montoTotal != null ? montoTotal : 0;
        this.minimarket = minimarket != null ? minimarket : 0;
        this.id = id != null ? id : 0;
    }
}