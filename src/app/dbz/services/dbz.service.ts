import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

//*Le indica a Angular que es un servicio
@Injectable({
  //*Para que el servicio sea un singleton en toda la aplicación
  providedIn: 'root',
})

//*Sin importar donde lo injectemos, siempre vamos a tener el valor actual
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter(index: number) {
    this.characters.splice(index, 1);
  }

  constructor() {}
}
