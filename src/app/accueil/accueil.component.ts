import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import {User} from '../models/User';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  user : User = new User();


  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.user)
    this.userService.get_user(this.user).subscribe((id: User )=>{
      this.user = id;
    })
  }

}
