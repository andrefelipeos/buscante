import { Component, Input } from '@angular/core';

import { loadingCardsAnimationTrigger } from 'src/app/animations';
import { Livro } from 'src/app/models/interfaces';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css'],
  animations: [loadingCardsAnimationTrigger]
})
export class LivroComponent {

  @Input() livro: Livro;
  modalAberto: boolean;

  onModalChange(evento: boolean) {
    this.modalAberto = evento;
  }
}
