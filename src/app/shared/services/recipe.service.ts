import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "../models/recipe.model";
import {Ingredient} from "../models/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Injectable()
export class RecipeService {
   recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 11),

            ]),
        new Recipe('Chicken Tikka Masala', 'This is a simple Chicken Tikka masala Recipe.',
            'https://therealfoodrds.com/wp-content/uploads/2017/07/Chicken-Tikka-Masala-Skewers-012-e1501011368257.jpg',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Onion', 2),
                new Ingredient('Tomatoes', 3),
                new Ingredient('Garlic cloves', 2),
            ])
    ];

  constructor(private sLService:ShoppingListService) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients:Ingredient[]){
    this.sLService.addIngredientsToList(ingredients);
  }
}
