import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './list/shoppingList/shoppingList.component';
import { ShoppingEditComponent } from './list/shoppingEdit/shoppingEdit.component';
import { RecipeItemComponent } from './recipes/recipeList/recipeItem/recipeItem.component';
import { RecipeDetailComponent } from './recipes/recipeDetail/recipeDetail.component';
import { RecipeListComponent } from './recipes/recipeList/recipeList.component';
import { RecipesComponent } from './recipes/recipes.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        ShoppingListComponent,
        ShoppingEditComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        RecipesComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'book-of-recipes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('book-of-recipes');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'book-of-recipes app is running!'
    );
  });
});
