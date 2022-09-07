import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/recipes',
      pathMatch: 'full'
    },
    {
      path: 'recipes',
      //loadChildren: './recipes/recipes.module#RecipesModule'  //fails in newer Angular
      //here is the correct version for newer Angular
      loadChildren: () => import("./recipes/recipes.module").then(m => m.RecipesModule)
    },
    {
      path: 'shopping-list',
      loadChildren: () => import("./shopping-list/shopping-list.module").then(m => m.ShoppingListModule)
    },
    {
      path: 'auth',
      loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
    }
  ];

@NgModule({
    imports: [
      //router functionality is added here, our routes are registered by forRoot()  
      RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}