import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

interface Food {
  categoryFood: string,
  date: Date,
  howCook: [],
  imageFood: string,
  imageProfile: string,
  ingredient: [],
  like: number
  nameFood: string
  timeCook: string
  username: string
}

interface Foods extends Array<Food> {}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _foods: Foods;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.getDataFood();
  }

  getDataFood() {
    this.foodService.getFoods().subscribe((res:Foods) => {
      
      this._foods = res;
    })
  }

  get foods() { return this._foods }

}
