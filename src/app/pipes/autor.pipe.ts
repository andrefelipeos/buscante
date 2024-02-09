import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autor'
})
export class AutorPipe implements PipeTransform {

  transform(autores: string[]): string {
    if (autores) return autores[0];
    else return "";
  }

}
