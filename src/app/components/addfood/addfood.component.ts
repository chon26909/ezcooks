import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.scss']
})
export class AddfoodComponent implements OnInit {

  public formFood: FormGroup = new FormGroup({});

  public submited: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formFood = this.formBuilder.group({

      name: new FormControl('', [Validators.required]),

      price: new FormControl('',
      [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ]),

      howtoCook: this.formBuilder.array([])

    })

    this.addhowtoCook();

  }

  get f_food() {
    return this.formFood.controls;
  }

  get f_howtoCook() { 
    return this.formFood.controls['howtoCook'] as FormArray;
  }

  addhowtoCook() {

    if(this.f_howtoCook.controls.length >= 5) { return }

    //ดึงค่า FormArray ชื่อว่า howtoCook ล่าสุดมา
    const array_ingredient = this.formFood.get("howtoCook") as FormArray;

    const new_ingredient = new FormControl('',[Validators.required]);

    array_ingredient.push(new_ingredient)

  }

  deleteHowtoCook(index:number) {

    this.f_howtoCook.removeAt(index);

  }


  handleSubmitForm() {

    this.submited = true;

    console.log(this.formFood);

  }

}
