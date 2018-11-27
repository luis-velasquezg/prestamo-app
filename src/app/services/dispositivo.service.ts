import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from './api-services.config';
import { Dispositivo } from '../dtos/dispositivo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  constructor(private http : HttpClient) { }

  getAllDispositivos():Observable<Dispositivo[]>{
    const url = `${ApiService.API_URL_LISTAR_DISPOSITIVOS}`;
    return this.http.get<Dispositivo[]>(url)
    .pipe(
        catchError(this.handleError('getAllDispositivos', []))
    );
  }

  getDispositivo(codigo : number):Observable<Dispositivo>{
    const url = `${ApiService.API_URL_GET_DISPOSITIVO}/${codigo}`;
    return this.http.get<Dispositivo>(url)
    .pipe(
        catchError(this.handleError<Dispositivo>('getDispositivo'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
    console.log(message);
  }

}
