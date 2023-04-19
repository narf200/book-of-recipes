import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: 'recipeDetail.component.html',
  styleUrls: ['recipeDetail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipeForDetail: Recipe;
}
