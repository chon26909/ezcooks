import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

interface Food {
  id: string,
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


@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {

  private _detailFood: Food;

  constructor(private route:ActivatedRoute, private foodservice: FoodService) { }

  ngOnInit(): void {
    this.getDetailFoodByID();
  }

  get detailFood() { return this._detailFood }

  getDetailFoodByID() {

    //รับค่า id จาก url
    const food_id = this.route.snapshot.paramMap.get('id');

    this.foodservice.getFoodDetail(food_id).subscribe((res: Food ) => {

      console.log(res)
      this._detailFood = res;

    })
  }

}
