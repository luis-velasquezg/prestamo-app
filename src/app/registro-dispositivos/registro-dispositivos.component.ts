import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-dispositivos',
  templateUrl: './registro-dispositivos.component.html',
  styleUrls: ['./registro-dispositivos.component.css']
})
export class RegistroDispositivosComponent implements OnInit {

  dispositivo : any = {};
  codigo:any = null;

  constructor() { }

  ngOnInit() {
  }

}
