import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfoodComponent } from './components/addfood/addfood.component';
import { CreateFoodComponent } from './components/create-food/create-food.component';
import { FoodDetailComponent } from './components/food-detail/food-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "detail/:id",
    component: FoodDetailComponent
  },
  {
    path: "create",
    component: CreateFoodComponent
  },
  {
    path: "addfood",
    component: AddfoodComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
