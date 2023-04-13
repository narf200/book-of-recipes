import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipeList.component.html',
  styleUrls: ['recipeList.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipeName: string = '';
  recipeDescription: string = '';
  recipeImagePath: string = '';

  recipes: Recipe[] = [
    new Recipe(
      'Testy pasta',
      'Some description',
      'http://www.ftswebdesign.com/wp-content/uploads/2017/05/5D3_4637.jpg'
    ),
    new Recipe(
      'Pizza peperony',
      'So good and big testy pizza',
      'http://pizzamaruusa.com/wp-content/uploads/2016/01/Pepperoni-Pizza.jpg'
    ),
  ];

  onCreateRecipe() {
    this.recipes.push(
      new Recipe(this.recipeName, this.recipeDescription, this.recipeImagePath)
    );

    this.recipeName = '';
    this.recipeDescription = '';
    this.recipeImagePath = '';
    console.log(this.recipes);
  }

  ngOnInit() {}
}
