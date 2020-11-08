import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() cate: any;
  id: string;
  name: string;

  ngOnInit(): void {
    this.id = this.cate.id;
    this.name = this.cate.name;
  }

  // tslint:disable-next-line: typedef
  addCategory(){
    // tslint:disable-next-line: prefer-const
    let data = {
      id: this.id,
      name: this.name
    };
    this.service.addCategory(data).subscribe(res => {
      alert(res.toString());
    });
  }

  // tslint:disable-next-line: typedef
  updateCategory(){
    // tslint:disable-next-line: prefer-const
    let data = {
      id: this.id,
      name: this.name
    };
    this.service.updateCategory(data).subscribe(res => {
      alert(res.toString());
    });
  }

}
