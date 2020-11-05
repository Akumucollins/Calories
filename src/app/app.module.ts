import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CategoryComponent } from './components/category/category.component';
import { FooditemComponent } from './components/fooditem/fooditem.component';
import { UserFooditemComponent } from './components/user-fooditem/user-fooditem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CategoryComponent,
    FooditemComponent,
    UserFooditemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
