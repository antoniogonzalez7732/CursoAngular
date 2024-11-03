import { Component } from "@angular/core";

@Component(
  {
    selector: 'app-counter', // nombre de mi componente, es buena practica colocarle el prefijo
    template: `
<h3>Contador: {{ counter }}</h3>
<button (click)="increaseBy(1)">+1</button>
<button (click)="reseatCounter()">Reseat</button>
<button (click)="increaseBy(-1)">-1</button>

    `
  }
)
export class CounterComponent {

  public counter: number = 10;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public reseatCounter(): void {
    this.counter = 10;
  }
}
