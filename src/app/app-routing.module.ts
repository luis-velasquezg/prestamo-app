import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudPrestamoComponent } from './solicitud-prestamo/solicitud-prestamo.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { DetalleDispositivoComponent } from './detalle-dispositivo/detalle-dispositivo.component';
import { RegistroDispositivosComponent } from './registro-dispositivos/registro-dispositivos.component';


const routes: Routes = [
  { path: '', redirectTo: '/listadoDispositivos', pathMatch: 'full' },
  { path: 'solicitudPrestamo', component: SolicitudPrestamoComponent },
  { path: 'listadoDispositivos', component: DispositivosComponent },
  { path: 'detalleDispositivo/:codigo', component: DetalleDispositivoComponent },
  { path: 'registroDispositivos', component: RegistroDispositivosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
