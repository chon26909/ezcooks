import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public image: string

  constructor() { 

    this.image = "https://firebasestorage.googleapis.com/v0/b/ezcook-11658.appspot.com/o/images%2Fimage_picker3312450892144266645.jpg?alt=media&token=79b6e635-7f7d-45d9-afda-ab11f4b25449";
  }

  ngOnInit(): void {
  }

}
