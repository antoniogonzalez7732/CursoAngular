import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 37

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroDetails(newName: string, newAge: number): void {
    this.name = newName;
    this.age = newAge;
  }

  changeHero(NewName: string): void {
    this.name = NewName;
  }

  changeAge(NewAge: number): void {
    this.age = NewAge;
  }

  resetHeroDetails(): void {
    this.name = 'Ironman';
    this.age = 37;
  }
}
