import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  private readonly API: string = "https://www.googleapis.com/books/v1/volumes";

  constructor(private http: HttpClient) { }

  buscar(termoDigitado: string): Observable<any> {
    const params: HttpParams = new HttpParams().append('q', termoDigitado);
    return this.http.get(this.API, { params })
  }

}
