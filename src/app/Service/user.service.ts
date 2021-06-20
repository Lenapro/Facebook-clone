import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
   data ={
    "login": "",
    "password": ""
  }

  inscription(data) {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(data);
    return this.http.post("http://localhost:8000/facebook/inscription", body, { 'headers': headers });
  }
  get_user(id) {
    return this.http.get("http://localhost:8000/facebook/get/" +id);
  }
  connexion_user(email, password){
    this.data.login = email;
    this.data.password = password;
    const header = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(this.data);
    return this.http.post("http://localhost:8000/facebook/connexion", body, { 'headers': header } )
  }
  
}
