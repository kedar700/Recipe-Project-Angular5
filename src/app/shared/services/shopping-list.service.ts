import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../models/ingredient.model";

@Injectable()
export class ShoppingListService {

     ingredientsChanged = new EventEmitter<Ingredient[]>();
     private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
  constructor() { }

  getIngredients():Ingredient[]{
    return this.ingredients.slice();
  }

  addIngredient(ingredient : Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientsToList(ingredients : Ingredient[]) {
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
