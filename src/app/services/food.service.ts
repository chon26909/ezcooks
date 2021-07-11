import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFoods() {

    const url = "https://ezcooks.herokuapp.com/food?category=ทั้งหมด";
    return this.http.get(url);
    
  }

  getFoodDetail(id) {
    const url = "https://ezcooks.herokuapp.com/food/detail/" + id;

    return this.http.get(url);

  }

}
