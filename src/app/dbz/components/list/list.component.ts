import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponentDbZ {

  @Input()
  public charactersList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    //console.log('ListComponentDbZ', id)
    this.onDelete.emit(id);
  }
}
