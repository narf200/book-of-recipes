import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shoppingList.component.html',
  styleUrls: ['shoppingList.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  @Input() ingredient: Ingredient;
  @Input() selectedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    console.log(this.ingredients);
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onIngredientAdded(ingredient: Ingredient) {
    console.log(ingredient);
    this.ingredients.push(ingredient);
  }

  // onIngredientDeleted(selectedIngredient) {
  //   console.log('selectedIngredient', this.selectedIngredient);
  //   console.log('selectedIngredient.name', this.selectedIngredient.name);
  //   console.log('ingredients', this.ingredients);
  //   this.ingredients = this.ingredients.filter(
  //     (ingredient) => ingredient?.name !== selectedIngredient.name
  //   );
  //   console.log('ingredients', this.ingredients);
  // }

  // onSelectIngredient(ingredient: Ingredient) {
  //   this.selectedIngredient = ingredient;
  //   console.log('ingredient', ingredient);
  //   console.log('this.selectedIngredient', this.selectedIngredient);
  // }

  onSelectIngredient(ingredient: Ingredient) {
    this.shoppingListService.selectIngredient(ingredient);
    console.log('ingredient', ingredient);
    console.log('this.selectedIngredient', this.selectedIngredient);
  }
}
