import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CategoryComponent } from './components/category/category.component';
import { FooditemComponent } from './components/fooditem/fooditem.component';
import { UserFooditemComponent } from './components/user-fooditem/user-fooditem.component';
import { SharedService } from './shared.service';

import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { ViewCategoryComponent } from './components/category/view-category/view-category.component';
import { EditFooditemComponent } from './components/fooditem/edit-fooditem/edit-fooditem.component';
import { ViewFooditemComponent } from './components/fooditem/view-fooditem/view-fooditem.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';
import { ViewUserfooditemComponent } from './components/user-fooditem/view-userfooditem/view-userfooditem.component';
import { EditUserfooditemComponent } from './components/user-fooditem/edit-userfooditem/edit-userfooditem.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CategoryComponent,
    FooditemComponent,
    UserFooditemComponent,
    EditCategoryComponent,
    ViewCategoryComponent,
    EditFooditemComponent,
    ViewFooditemComponent,
    EditProfileComponent,
    ViewProfileComponent,
    ViewUserfooditemComponent,
    EditUserfooditemComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule { }
