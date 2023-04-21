import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: 'recipeDetail.component.html',
  styleUrls: ['recipeDetail.component.css'],
})
export class RecipeDetailComponent {
  @Input() selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  moveIngredientsToShoppingList(ingredient) {
    this.recipeService.addIngredientsInToShoppingList(ingredient);
  }
}
