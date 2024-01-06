import { Component } from '@angular/core';
import { GoogleBooksService } from 'src/app/service/google-books.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  listaLivros: [];
  campoBusca: string = "";

  constructor(private service: GoogleBooksService) { }

  buscarLivros() {
    this.service
      .buscar(this.campoBusca)
      .subscribe({
        next: retornoApi => console.log(retornoApi),
        error: erroApi => console.error(erroApi),
        complete: () => console.log("Observable completado."),
      });
  }

}



