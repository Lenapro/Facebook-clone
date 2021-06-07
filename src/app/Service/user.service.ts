import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  inscription(data) {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(data);
    return this.http.post("http://localhost:8000/facebook/inscription", body, { 'headers': headers });
  }
  get_user(id) {
    return this.http.get("http://localhost:8000/facebook/get/" +id);
  }

  
}
