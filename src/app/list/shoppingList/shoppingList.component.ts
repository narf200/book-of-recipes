import { Component, Input } from '@angular/core';
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
  @Input() ingredient: Ingredient;

  @Input() selectedIngredient: Ingredient;

  ngAfterContentInit() {
    console.log(this.ingredients);
    console.log(this.ingredients[0]);
    console.log(this.ingredients[0].name);
    console.log(this.ingredients[1]);
  }

  onIngredientAdded(ingredient: Ingredient) {
    console.log(ingredient);
    this.ingredients.push(ingredient);
  }

  onIngredientDeleted(selectedIngredient) {
    console.log('selectedIngredient', this.selectedIngredient);
    console.log('selectedIngredient.name', this.selectedIngredient.name);
    console.log('ingredients', this.ingredients);
    this.ingredients = this.ingredients.filter(
      (ingredient) => ingredient?.name !== selectedIngredient.name
    );
    console.log('ingredients', this.ingredients);
  }

  onSelectIngredient(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
    console.log('ingredient', ingredient);
    console.log('this.selectedIngredient', this.selectedIngredient);
  }
}
