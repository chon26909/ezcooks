import { Component, OnInit } from '@angular/core';

interface Profile {
  username: string,
  photo_url: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private _profile: Profile;

  constructor() {
    this._profile = {
      username : "บอส บอสซ่า",
      photo_url: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.18169-9/1538879_563409000420370_1510537667_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ba80b0&_nc_eui2=AeH4eAM8Enm4YlY1MgeMLm6tVbbSaa6lN6BVttJprqU3oC9frTiLCPqKh7jwR8FtiOFi7mAEPrxuKIAnUkvibOta&_nc_ohc=rZNhjCJCY-AAX-ewZRg&tn=4i0B6RlA5ca8zbHe&_nc_ht=scontent.fbkk5-4.fna&oh=c5d3f4668eef3a112fb74ba4e83b8b7b&oe=60E5FF24"
    }
   }

  ngOnInit(): void {
  }

  get profile() { return this._profile }

}
