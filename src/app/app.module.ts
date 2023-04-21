import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './list/shoppingList/shoppingList.component';
import { ShoppingEditComponent } from './list/shoppingEdit/shoppingEdit.component';
import { RecipeItemComponent } from './recipes/recipeList/recipeItem/recipeItem.component';
import { RecipeDetailComponent } from './recipes/recipeDetail/recipeDetail.component';
import { RecipeListComponent } from './recipes/recipeList/recipeList.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './list/shoppingList.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipesComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
