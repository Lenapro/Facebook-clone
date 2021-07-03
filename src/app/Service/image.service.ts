import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  apiUrl = "http://localhost:8000/facebook/"

  constructor(private http: HttpClient) { }

  upload() {

  }
  getImages(id: number) {
    return this.http.get(this.apiUrl + "images/" + id);
  }
}
