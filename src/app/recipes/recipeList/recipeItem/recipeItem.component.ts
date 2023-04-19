import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: 'recipeItem.component.html',
  styleUrls: ['recipeItem.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  // По клику на конкретный элемент мы создаем одино событие которое мы потом передадим выше в recipeList
  // тоже через еммитер а там уде создадим объект который отрисуем в дитэилс
  // Тут сейчас нам нужно создать эммитер и сделать на него emit
  onSelectRecipe() {
    this.recipeSelected.emit();
  }
}
