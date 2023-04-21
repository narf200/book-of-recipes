import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: 'recipeItem.component.html',
  styleUrls: ['recipeItem.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  // По клику на конкретный элемент мы создаем одино событие которое мы потом передадим выше в recipeList
  // тоже через еммитер а там уде создадим объект который отрисуем в дитэилс
  // Тут сейчас нам нужно создать эммитер и сделать на него emit

  // Теперь всё заменено на сервис рецептов. Не нужно пробрасывать через каждый компонент.
  // Можно указать где конкретно происходит клик и где слушать.
  onSelectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
