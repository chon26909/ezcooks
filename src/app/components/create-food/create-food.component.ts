import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.scss']
})
export class CreateFoodComponent implements OnInit {

  public formFood: FormGroup;
  public submited: boolean;

  constructor(private formBuilder: FormBuilder) {

    this.submited = false;

  } 
  
  ngOnInit(): void {

    this.formFood = this.formBuilder.group({
      foodName: new FormControl('',[Validators.required]),
      ingredients: this.formBuilder.array([]),
    })

    this.addIngredient();

  }

  get control() {
    return this.formFood.controls
  }

  get arrayIngredient() {
    return this.formFood.controls['ingredients'] as FormArray;
  }



  addIngredient() {

    const new_ingredient = this.formFood.get('ingredients') as FormArray;

    const ingredient_control = new FormControl('',[Validators.required])

    new_ingredient.push(ingredient_control);

  }

  submit() {

    this.submited = true;

      console.log(this.formFood);
  }

}
