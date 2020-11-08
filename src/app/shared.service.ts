import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  getProfile = new BehaviorSubject<any>([]);
  getCategory = new BehaviorSubject<any>([]);
  getFooditem = new BehaviorSubject<any>([]);
  getUserFooditem = new BehaviorSubject<any>([]);

  private profileurl: string;
  private categoryurl: string;
  private fooditemurl: string;
  private userfooditemurl: string;

  constructor(private http: HttpClient) {

    this.profileurl = 'https://calories1.herokuapp.com/Profile/';
    this.categoryurl = 'https://calories1.herokuapp.com/Category/';
    this.fooditemurl = 'https://calories1.herokuapp.com/Fooditem/';
    this.userfooditemurl = 'https://calories1.herokuapp.com/UserFooditem/';

   }


  // tslint:disable-next-line: typedef
  getProfileList(): Observable<any[]>{
    return this.http.get<any[]>(this.profileurl);
  }

  getProfileUser(id): Observable<any[]>{
    return this.http.get<any[]>(`${this.profileurl}/${id}`);
  }

  // tslint:disable-next-line: typedef
  getProfileUsers() {
    return this.getProfile.asObservable();
  }


  // tslint:disable-next-line: typedef
  addProfile(data){
    return this.http.post(this.profileurl, data);
  }

  // tslint:disable-next-line: typedef
  updateProfile(id, data){
    return this.http.put(`${this.profileurl}/${id}`, data);
  }

  // tslint:disable-next-line: typedef
  deleteProfile(id){
    return this.http.delete(`${this.profileurl}/${id}`);
  }

  // UploadPhoto(val: any){
  //   return this.http.post(this.APIUrl + '/SaveFile/', val);
  // }

  getCategoryList(): Observable<any[]>{
    return this.http.get<any[]>(this.categoryurl);
  }

  // tslint:disable-next-line: typedef
  addCategory(data){
    return this.http.post(this.categoryurl, data);
  }

  // tslint:disable-next-line: typedef
  updateCategory(data){
    return this.http.put(this.categoryurl, data);
  }

  // tslint:disable-next-line: typedef
  deleteCategory(id){
    return this.http.delete(`${this.categoryurl}/${id}` );
  }

  getFooditemList(): Observable<any[]>{
    return this.http.get<any[]>(this.fooditemurl);
  }

  // tslint:disable-next-line: typedef
  addFooditem(data){
    return this.http.post(this.fooditemurl, data);
  }

  // tslint:disable-next-line: typedef
  updateFooditem(data){
    return this.http.put(this.fooditemurl, data);
  }

  // tslint:disable-next-line: typedef
  deleteFooditem(id){
    return this.http.delete(`${this.fooditemurl}/${id}` );
  }


  getUserFooditemList(): Observable<any[]>{
    return this.http.get<any[]>(this.userfooditemurl);
  }

  // tslint:disable-next-line: typedef
  addUserFooditem(data){
    return this.http.post(this.userfooditemurl, data);
  }

  // tslint:disable-next-line: typedef
  updateUserFooditem(data){
    return this.http.put(this.userfooditemurl, data);
  }

  // tslint:disable-next-line: typedef
  deleteUserFooditem(id){
    return this.http.delete(`${this.userfooditemurl}/${id}` );
  }

}
