import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-edit-fooditem',
  templateUrl: './edit-fooditem.component.html',
  styleUrls: ['./edit-fooditem.component.css']
})
export class EditFooditemComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() food: any;
  id: string;
  name: string;
  category: string;
  calorie: string;
  carbohydrate: string;
  fats: string;
  protein: string;
  quantity: string;

  ngOnInit(): void {
    this.id = this.food.id;
    this.name = this.food.name;
    this.category = this.food.category;
    this.calorie = this.food.calorie;
    this.carbohydrate = this.food.carbohydrate;
    this.fats = this.food.fats;
    this.protein = this.food.protein;
    this.quantity = this.food.quantity;
  }

  // tslint:disable-next-line: typedef
  addFooditem() {
    // tslint:disable-next-line: prefer-const
    let data = {
      id: this.id,
      name: this.name,
      category: this.category,
      calorie: this.calorie,
      carbohydrate: this.carbohydrate,
      fats: this.fats,
      protein: this.protein,
      quantity: this.quantity,
    };
    this.service.addFooditem(data).subscribe(res => {
      alert(res.toString());
    });
  }

  // tslint:disable-next-line: typedef
  updateFooditem() {
    // tslint:disable-next-line: prefer-const
    let data = {
      id: this.id,
      name: this.name,
      category: this.category,
      calorie: this.calorie,
      carbohydrate: this.carbohydrate,
      fats: this.fats,
      protein: this.protein,
      quantity: this.quantity,
    };
    this.service.updateFooditem(data).subscribe(res => {
      alert(res.toString());
    });
  }

}
