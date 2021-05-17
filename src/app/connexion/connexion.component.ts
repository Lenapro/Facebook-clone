import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor() { }

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
  password: boolean;
  passtest: string;
  // tslint:disable-next-line: variable-name
  password_medecin: string;

}
