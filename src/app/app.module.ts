import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';
import { FooditemComponent } from './fooditem/fooditem.component';
import { UserFooditemComponent } from './user-fooditem/user-fooditem.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CategoryComponent,
    FooditemComponent,
    UserFooditemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
