import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: 'shoppingEdit.component.html',
  styleUrls: ['shoppingEdit.component.css'],
})
export class ShoppingEditComponent {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientDeleted = new EventEmitter<any>();

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  onAdd(nameInput, amountInput) {
    this.ingredientAdded.emit(
      new Ingredient(nameInput.value, amountInput.value)
    );
  }

  onDelete() {
    this.ingredientDeleted.emit();
  }

  onClear() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
