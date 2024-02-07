import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  private readonly API: string = "https://www.googleapis.com/books/v1/volumes";

  constructor(private http: HttpClient) { }

  buscar(termoDigitado: string): Observable<LivrosResultado> {
    const params: HttpParams = new HttpParams().append('q', termoDigitado);
    return this.http.get<LivrosResultado>(this.API, { params })
  }

}
