import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../Service/user.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
 
 
})
export class InscriptionComponent implements OnInit {
  
  hide = true;
  email: boolean;
  password: boolean;
  passtest: string;
  // tslint:disable-next-line: variable-name
  password_medecin: string;

  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
 
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
  onSubmit(form: NgForm) {
  }

  inscription(){
    console.log(this.user)
    this.user.genre = "Feminin"
    this.userService.inscription(this.user).subscribe((data: User) =>{
      if(data !== null){
        this.user = data;
        this.router.navigate(['accueil']);
        console.log(this.user);
      }else{
        console.log(data)
      }
    })
  }

}
