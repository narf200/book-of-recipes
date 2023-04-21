import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable, Input } from '@angular/core';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Egg', 4, 'not in list'),
    new Ingredient('Cucumber', 66, 'not in list'),
  ];
  @Input() ingredient: Ingredient;
  @Input() selectedIngredient: Ingredient;

  // temporaryIngredients: Ingredient[];
  //
  // addIngredientToTemporaryIngredients(ingredient) {
  //   console.log('temporaryIngredients', this.temporaryIngredients)
  //   this.temporaryIngredients.push(ingredient)
  // }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    console.log('ingredients =====>>', this.ingredients);
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  moveIngredientToShoppingList(ingredient: Ingredient[]) {
    ingredient.map((item) => this.ingredients.push(item));
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  deleteIngredient() {
    this.ingredients = this.ingredients.filter(
      (ingredient) => ingredient?.name !== this.selectedIngredient.name
    );
  }
  selectIngredient(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
  }
}
