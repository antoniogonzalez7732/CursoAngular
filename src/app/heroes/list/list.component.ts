import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  public heroNames: string[] = ['Ironman', 'Thor', 'Hulk', 'Captain America', 'Black Widow'];

  public deleteHero?: string = '';

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
