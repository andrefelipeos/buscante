import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Observable, catchError, debounceTime, distinctUntilChanged, filter, map,
  switchMap, throwError
} from 'rxjs';

import { LivroVolumeInfo } from 'src/app/models/LivroVolumeInfo';
import { LivrosResultado } from 'src/app/models/interfaces';
import { GoogleBooksService } from 'src/app/service/google-books.service';

const PAUSA = 600;

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  campoBusca: FormControl = new FormControl;
  mensagemDeErro: string = "";
  livrosResultado: LivrosResultado;

  constructor(private service: GoogleBooksService) { }

  livrosEncontrados$: Observable<LivroVolumeInfo[]> = this.campoBusca
    .valueChanges
    .pipe(
      debounceTime(PAUSA),
      filter(termoDigitado => termoDigitado.length > 2),
      distinctUntilChanged(),
      switchMap(termoDigitado => this.service.buscar(termoDigitado)),
      map(payload => this.livrosResultado = payload),
      map(payload => payload.items ?? []),
      map(itens => itens.map(item => new LivroVolumeInfo(item))),
      catchError(() => {
        return throwError(() => {
          new Error(this.mensagemDeErro = "Ocorreu um erro. Por favor, recarregue a página.");
        })
      })
    );

}
