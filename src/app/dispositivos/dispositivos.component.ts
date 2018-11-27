import { Component, OnInit } from '@angular/core';
import { Dispositivo } from '../dtos/dispositivo';
import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit {

  consulta : any = null;
  dispositivoList : Dispositivo[];


  constructor(private dispositivoService : DispositivoService) { }

  ngOnInit() {
    this.dispositivoService.getAllDispositivos()
      .subscribe(dispositivos => this.dispositivoList = dispositivos);
  }

}
