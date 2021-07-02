import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import { UserService } from '../Service/user.service';
import {User} from '../models/User'
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  
  user : User = new User();
  erreur=false;
 

  constructor(private userService: UserService, private router : Router) { }

  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
  onSubmit(form: NgForm) {
    
  
  }

  hide = true;
  email: boolean;
  // Chanson de Dieu hein mdr
  password: boolean;
  passtest: string;
  // tslint:disable-next-line: variable-name
  password_medecin: string;

  

  connexion(){
    console.log(this.user)
    this.userService.connexion_user(this.user.email, this.user.password).subscribe((data : User) =>{
      console.log(data)
      if(data.id){
          this.router.navigate(['accueil'])
      }
      else {
        this.erreur= true;
      }
      
     
    })
  }
  

}