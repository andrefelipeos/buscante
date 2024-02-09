import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroVolumeInfo } from 'src/app/models/LivroVolumeInfo';
import { Item, Livro } from 'src/app/models/interfaces';
import { GoogleBooksService } from 'src/app/service/google-books.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: Livro[];
  campoBusca: string = "";
  subscription: Subscription;

  constructor(private service: GoogleBooksService) { }

  buscarLivros() {
    this.subscription = this.service
      .buscar(this.campoBusca)
      .subscribe({
        next: itens => this.listaLivros = this.livrosResultadoParaLivros(itens),
        error: erroApi => console.error(erroApi)
      });
  }

  livrosResultadoParaLivros(itens: Item[]): LivroVolumeInfo[] {
    return itens.map(item => new LivroVolumeInfo(item));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
