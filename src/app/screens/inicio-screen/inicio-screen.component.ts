import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


@Component({
  selector: 'app-inicio-screen',
  templateUrl: './inicio-screen.component.html',
  styleUrls: ['./inicio-screen.component.sass']
})
export class InicioScreenComponent implements OnInit {

  constructor(private t:UsuarioService) { }

  ngOnInit(): void {
  }

  check(){
    // this.t.get("DoñaRosa","rosita").
  }

  check1(){
    alert(this.t.post("MrPollo","egg56","",1,"123"));
  }

}
