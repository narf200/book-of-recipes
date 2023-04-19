import { Component, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  @Output() recipeForDetail: Array<Recipe> = [];

  onRecipeTranseeted(recipe: Recipe) {
    this.recipeForDetail.length > 0 ? (this.recipeForDetail = []) : null;
    this.recipeForDetail.push(recipe);
    console.log(this.recipeForDetail);
    console.log(this.recipeForDetail[0].name);
  }
}
