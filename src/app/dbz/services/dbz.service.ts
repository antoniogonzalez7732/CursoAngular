import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';


//Este decorador le dice a Angular que esta clase puede ser inyectada en otras clases y es un servicio
@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8000
    },
    {
      id: uuid(),
      name: 'Nappa',
      power: 7000
    }
  ];

  addCharacter(character: Character): void {
    const newCaracter: Character = {
      ...character, // Esto toma todas las propiedades del objeto entrante y las asigna al objeto nuevo
      id: uuid()
    }
    this.characters.push(newCaracter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    //console.log('DbzService', id)
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
