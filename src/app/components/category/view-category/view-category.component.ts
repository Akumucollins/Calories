import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  constructor(private service: SharedService) { }

  CategoryList: any = [];

  ModalTitle: string;
  cate: any;
  // tslint:disable-next-line: no-inferrable-types
  ActivateEditCategory: boolean = false;

  ngOnInit(): void {
    this.refreshCategoryList();
  }

  // tslint:disable-next-line: typedef
  addclick() {
    this.cate = {
      id: 0,
      name: '',
    };
    this.ModalTitle = 'Add Category';
    this.ActivateEditCategory = true;
  }

  // tslint:disable-next-line: typedef
  editclick(item) {
    this.cate = item;
    this.ModalTitle = 'Edit Category';
    this.ActivateEditCategory = true;
  }

  // tslint:disable-next-line: typedef
  deleteClick(item) {
    if (confirm('Are you sure')) {
      this.service.deleteCategory(item.id).subscribe(data => {
          alert(data.toString());
          this.refreshCategoryList();
      });
    }
  }

  // tslint:disable-next-line: typedef
  closeClick() {
    this.ActivateEditCategory = false;
    this.refreshCategoryList();
  }

  // tslint:disable-next-line: typedef
  refreshCategoryList() {
    this.service.getCategoryList().subscribe(data => {
      this.CategoryList = data;
    });
  }

}
