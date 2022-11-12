import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finanzas-screen',
  templateUrl: './finanzas-screen.component.html',
  styleUrls: ['./finanzas-screen.component.sass']
})
export class FinanzasScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('usuario');
    if (!datos) {
      window.location.href = "/inicio";
    }
  }

}
