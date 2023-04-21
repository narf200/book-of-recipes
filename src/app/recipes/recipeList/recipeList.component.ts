import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipeList.component.html',
  styleUrls: ['recipeList.component.css'],
})
export class RecipeListComponent implements OnInit {
  @ViewChild('recipeNameInput') recipeNameInput: ElementRef;
  @ViewChild('recipeDescription') recipeDescription: ElementRef;
  @ViewChild('recipeImagePath') recipeImagePath: ElementRef;
  @Input() ingr: Ingredient;
  recipes: Recipe[];
  temporaryIngredients: Ingredient[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onCreateRecipe(recipeNameInput, recipeDescription, recipeImagePath) {
    this.recipeService.createRecipe(
      recipeNameInput,
      recipeDescription,
      recipeImagePath,
      this.temporaryIngredients
    );

    recipeNameInput.value = '';
    recipeDescription.value = '';
    recipeImagePath.value = '';
  }

  addIngredientToList(ingredientNameInput, ingredientAmountInput) {
    const tempIngredient = new Ingredient(
      ingredientNameInput.value,
      ingredientAmountInput.value,
      'not in list'
    );
    this.temporaryIngredients.push(tempIngredient);
    console.log('temporaryIngredients', this.temporaryIngredients);
    ingredientNameInput.value = '';
    ingredientAmountInput.value = '';
  }
}
