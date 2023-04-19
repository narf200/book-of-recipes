import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipeList.component.html',
  styleUrls: ['recipeList.component.css'],
})
export class RecipeListComponent implements OnInit {
  // recipeName: string = '';
  // recipeDescription: string = '';
  // recipeImagePath: string = '';
  @Output() recipeTranseeted = new EventEmitter<Recipe>();

  @ViewChild('recipeNameInput') recipeNameInput: ElementRef;
  @ViewChild('recipeDescription') recipeDescription: ElementRef;
  @ViewChild('recipeImagePath') recipeImagePath: ElementRef;

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

  onCreateRecipe(recipeNameInput, recipeDescription, recipeImagePath) {
    this.recipes.push(
      new Recipe(
        recipeNameInput.value,
        recipeDescription.value,
        recipeImagePath.value
      )
    );

    recipeNameInput.value = '';
    recipeDescription.value = '';
    recipeImagePath.value = '';

    console.log(this.recipes);
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeTranseeted.emit(recipe);
  }

  ngOnInit() {}
}
