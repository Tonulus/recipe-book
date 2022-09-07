import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";


const routes: Routes = [
    {
      path: '',
      component: ShoppingListComponent
    }       // /shopping-list
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes), CommonModule],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule {}