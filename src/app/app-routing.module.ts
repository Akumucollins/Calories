import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { CategoryComponent } from './components/category/category.component';
import { FooditemComponent } from './components/fooditem/fooditem.component';
import { UserFooditemComponent } from './components/user-fooditem/user-fooditem.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'fooditem', component: FooditemComponent },
  { path: 'user-fooditem', component: UserFooditemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
