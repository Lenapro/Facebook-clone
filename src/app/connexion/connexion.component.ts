import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { User } from '../models/User'
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

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

  hide = true;
  email: boolean;
  // Chanson de Dieu hein mdr
  password: boolean;

  connexion() {
    console.log(this.user)
    this.userService.connexion_user(this.user.email, this.user.password).subscribe((data: User) => {
      console.log(data)
      if (data.id) {
        localStorage.setItem('id_user', data.id.toString())
        this.router.navigate(['accueil'])
      }
      else {
        this.password = false;
      }
    })
  }

  get_email() {
    this.userService.get_email(this.user.email).subscribe((data: any) => {
      console.log(data)
      if (data.email == true) {
        this.email = data.email;
        this.connexion();
      } else {
        this.email = data.email;
      }
    })
  }


}