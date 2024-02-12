import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, switchMap } from 'rxjs';
import { LivroVolumeInfo } from 'src/app/models/LivroVolumeInfo';
import { GoogleBooksService } from 'src/app/service/google-books.service';

const PAUSA = 600;

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  campoBusca: FormControl = new FormControl;

  constructor(private service: GoogleBooksService) { }

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    filter(termoDigitado => termoDigitado.length > 2),
    switchMap(termoDigitado => this.service.buscar(termoDigitado)),
    map(itens => itens.map(item => new LivroVolumeInfo(item)))
  );

}
