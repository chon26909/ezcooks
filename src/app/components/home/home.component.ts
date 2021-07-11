import { Component, OnInit } from '@angular/core';
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

interface Foods extends Array<Food> { }


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _foods: Foods;
  private _allFood: Foods;
  private _categories: String[];
  private _selected_category: String; //เก็บชื่อหมวดหมู่ที่ใช้ผู้ใช้เลือก

  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.getDataFood();
    this._categories = ["ทั้งหมด"];

    this._selected_category = "ทั้งหมด" // ค่าเริ่มต้น คือ ทั้งหมด
  }

  getDataFood() {

    this.foodService.getFoods().subscribe((res: Foods) => {

      this._foods = res;
      this._allFood = res;

      console.log(this._allFood);

      this._foods.map((food) => {

        this._categories.push(food.categoryFood);   //เพิ่ม หมวดหมู่ของอาหาร ลงไป

        // if(!this._categories.includes(food.categoryFood)) { //ถ้าตัวแปร array _categories มันไม่มี food.categoryFood ตัวนี้ เป็นส่วนประกอบ

        //     // this._categories.push(food.categoryFood);

        //     this._categories = [...this._categories, food.categoryFood];

        // }


      })

      this._categories = [...new Set(this._categories)];  // ลบค่าที่ซ้ำออกจาก arrar categories

      console.log(this._categories);


    })
  }

  get foods() { return this._foods }
  get categories() { return this._categories }
  get selectedCategory() { return this._selected_category }


  showCategory(category_name: string) {

    this._selected_category = category_name;

    this._foods = [];  //ล้างข้อมูลใน array 

    this._foods = category_name == "ทั้งหมด" ? this._allFood : this._allFood.filter(food => (food.categoryFood == category_name));

    // if (category_name == "ทั้งหมด") {
    //   this._foods = this._allFood;
    // }
    // else {
    //   this._allFood.map((food) => {

    //     if (food.categoryFood == category_name) {

    //       this._foods.push(food)

    //     }

    //   })
    // }



  }

}
