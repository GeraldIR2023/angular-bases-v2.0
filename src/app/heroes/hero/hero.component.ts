import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  //^Método que se ve como una propiedad
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 20;
  }

  resetForm(): void {
    this.name = 'Iromman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach((element) => {
    //   element.innerHTML = ' <h1>Desde Angular</h1>';
    // });
  }
}
