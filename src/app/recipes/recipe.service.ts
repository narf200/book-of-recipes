import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../list/shoppingList.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Testy pasta',
      'Some description',
      'http://www.ftswebdesign.com/wp-content/uploads/2017/05/5D3_4637.jpg',
      [
        new Ingredient('carot', 6, 'not in list'),
        new Ingredient('loal', 2, 'not in list'),
      ]
    ),
    new Recipe(
      'Pizza peperony',
      'So good and big testy pizza',
      'http://pizzamaruusa.com/wp-content/uploads/2016/01/Pepperoni-Pizza.jpg',
      [
        new Ingredient('sosige', 2, 'not in list'),
        new Ingredient('meat', 12, 'not in list'),
      ]
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes;
  }

  createRecipe(
    recipeNameInput,
    recipeDescription,
    recipeImagePath,
    temporaryIngredients
  ) {
    this.recipes.push(
      new Recipe(
        recipeNameInput.value,
        recipeDescription.value,
        recipeImagePath.value,
        temporaryIngredients
      )
    );
  }

  addIngredientsInToShoppingList(ingredients) {
    console.log('ingredients ====> wat i get', ingredients);
    ingredients.map((item) => (item.status = 'in list'));
    this.shoppingListService.moveIngredientToShoppingList(ingredients);
  }
}
