import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GoogleBooksService } from 'src/app/service/google-books.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: [];
  campoBusca: string = "";
  subscription: Subscription;

  constructor(private service: GoogleBooksService) { }

  buscarLivros() {
    this.subscription = this.service
      .buscar(this.campoBusca)
      .subscribe({
        next: retornoApi => console.log(retornoApi),
        error: erroApi => console.error(erroApi),
        complete: () => console.log("Observable completado."),
      });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}



