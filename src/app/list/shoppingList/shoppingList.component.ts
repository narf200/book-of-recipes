import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shoppingList.component.html',
  styleUrls: ['shoppingList.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Egg', 4),
    new Ingredient('Cucumber', 66),
  ];
}
