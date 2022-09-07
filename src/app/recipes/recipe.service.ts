import { Subject } from "rxjs";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];
  /*
  private recipes: Recipe[] = [
      new Recipe(
        'Pizza Casserole',
        'Easy Pizza Casserole Recipe',
        'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French fries', 10)
        ]),
      new Recipe(
        'Rowdy Enciladas',
        'Rita rowdy enciladas recipe',
        'https://realfood.tesco.com/media/images/Ritas-enchiladas-recipe-1400x919-1c7ff22b-ea5e-44cf-9ada-d7b04420002f-0-1400x919.jpg',
        [
          new Ingredient('Meat', 2),
          new Ingredient('French fries', 20)
        ]),
      new Recipe(
        'Svíčková',
        'Svick\'s sauce with dumplings',
        'https://cz.rc-cdn.community.thermomix.com/recipeimage/5wt0j623-11f38-097312-cfcd2-jl0726r3/40235c92-65a2-47b5-a9a8-d6efdb7fd84f/main/svickova-omacka-s-knedlikem.jpg',
        [
          new Ingredient('Meat', 3),
          new Ingredient('French fries', 30)
        ]),
      new Recipe(
        'Sriracha Kimchi',
        'Inspired by The Sriracha Cookbook',
        'https://www.thespruceeats.com/thmb/f6YlQLaUoeu28BQGHhXM54oJFLA=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/korean-sriracha-kimchi-recipe-2118867-hero-011-f6964d865b6246b180ddb843cdeb132d.jpg',
        [
          new Ingredient('Napa cabbage', 1),
          new Ingredient('kosher salt', 1),
          new Ingredient('garlic', 6),
          new Ingredient('ginger', 1),
          new Ingredient('fish sauce', 3),
          new Ingredient('cider vinegar', 1),
          new Ingredient('sugar', 1),
          new Ingredient('Sriracha', 1),
          new Ingredient('scallions, both white and green parts', 6),
          new Ingredient('large carrot, peeled and grated', 1)
        ]), 
        new Recipe(
          'Spaghetti',
          'Easy Weeknight Spaghetti with Meat Sauce',
          'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
          [
            new Ingredient('Meat', 1),
            new Ingredient('Olive oil', 3),
            new Ingredient('Onion', 1),
            new Ingredient('Tomato paste', 1)
          ]),  
      ];
    */
   
    setRecipes(recipes: Recipe[]) {
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
      return this.recipes.slice();
    }

    getRecipe(id: number) {
      return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index]= newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }
}