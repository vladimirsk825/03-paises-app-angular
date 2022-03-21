import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl :string = 'https://restcountries.com/v3.1';
 

  constructor( private http: HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>  {

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url); 
  }

  buscarXCapital(termino:string):Observable<Country[]>  {

    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url); 
  }
  
  getPasiXId(id:string):Observable<Country[]>  {

    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url); 
  }

  buscarXRegion(termino:string):Observable<Country[]>  {

    // const params = new HttpParams()
    //                   .set('fields','cca3,flags,capital, name.common,population');
    const url = `${this.apiUrl}/region/${termino}`;
    // return this.http.get<Country[]>(url, {params: params}); 
    return this.http.get<Country[]>(url);
  }
  

}
