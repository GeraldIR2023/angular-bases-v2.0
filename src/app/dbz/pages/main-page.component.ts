//*Se usa para hacer el router, es un componente con más componentes adentro
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  //^Hacemos la inyección de dependencias
  constructor(public dbzService: DbzService) {}
}
