import { Component } from '@angular/core';
import { ShoppingListService } from '../shoppingList.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: 'shoppingEdit.component.html',
  styleUrls: ['shoppingEdit.component.css'],
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  onAdd(nameInput, amountInput) {
    const newIngredient = new Ingredient(
      nameInput.value,
      amountInput.value,
      'in list'
    );
    this.shoppingListService.addIngredient(newIngredient);
  }

  onDelete() {
    this.shoppingListService.deleteIngredient();
  }

  onClear(nameInput, amountInput) {
    nameInput.value = '';
    amountInput.value = '';
  }
}
