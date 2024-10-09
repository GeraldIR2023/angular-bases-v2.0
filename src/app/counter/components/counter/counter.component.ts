import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)" class="btn btn-primary">+</button>
    <button (click)="resetCounter()" class="btn btn-warning">Reset</button>
    <button (click)="decreaseBy(1)" class="btn btn-primary">-</button>
  `,
})
export class CounterComponent {
  public title: string = 'Conter desde el Counter Component';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
