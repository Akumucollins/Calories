import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-view-fooditem',
  templateUrl: './view-fooditem.component.html',
  styleUrls: ['./view-fooditem.component.css']
})
export class ViewFooditemComponent implements OnInit {

  constructor(private service: SharedService) { }

  FooditemList: any = [];

  ModalTitle: string;
  food: any;
  // tslint:disable-next-line: no-inferrable-types
  ActivateEditFooditem: boolean = false;

  ngOnInit(): void {
    this.refreshFooditemList();
  }

  // tslint:disable-next-line: typedef
  addclick() {
    this.food = {
      id: 0,
      name: '',
      category: '',
      calorie: '',
      carbohydrate: '',
      fats: '',
      protein: '',
      quantity: '',
    };
    this.ModalTitle = 'Add Fooditem';
    this.ActivateEditFooditem = true;
  }

  // tslint:disable-next-line: typedef
  editclick(item) {
    this.food = item;
    this.ModalTitle = 'Edit Fooditem';
    this.ActivateEditFooditem = true;
  }

  // tslint:disable-next-line: typedef
  deleteClick(item) {
    if (confirm('Are you sure')) {
      this.service.deleteFooditem(item.id).subscribe(data => {
        alert(data.toString());
        this.refreshFooditemList();
      });
    }
  }

  // tslint:disable-next-line: typedef
  closeClick() {
    this.ActivateEditFooditem = false;
    this.refreshFooditemList();
  }

  // tslint:disable-next-line: typedef
  refreshFooditemList() {
    this.service.getFooditemList().subscribe(data => {
      this.FooditemList = data;
    });
  }
}
