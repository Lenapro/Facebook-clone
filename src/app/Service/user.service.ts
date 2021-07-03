import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "http://localhost:8000/facebook/"

  constructor(private http: HttpClient) { }

  data = {
    "login": "",
    "password": ""
  }

  inscription(data) {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(data);
    return this.http.post(this.apiUrl + "inscription", body, { 'headers': headers });
  }
  get_user(id) {
    return this.http.get(this.apiUrl + "get/" + id);
  }
  get_email(email) {
    return this.http.get(this.apiUrl + "email/" + email);
  }
  connexion_user(email, password) {
    this.data.login = email;
    this.data.password = password;
    const header = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(this.data);
    return this.http.post(this.apiUrl + "connexion", body, { 'headers': header })
  }

}
