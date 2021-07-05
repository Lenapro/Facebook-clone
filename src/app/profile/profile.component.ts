import { Component, OnInit } from '@angular/core';
import { Image } from '../models/Images';
import { User } from '../models/User';
import { ImageService } from '../Service/image.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  image = new Image();
  // déclaration d'une liste de type Image
  images: Image[] = [];

  // déclaration d'un objet de type user
  user: User = new User();

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.user.id = parseInt(localStorage.getItem('id_user'))
    this.getImages();
  }

  getImages() {
    this.imageService.getImages(this.user.id).subscribe((data: Image[]) => {
      console.log(data);
      if (data) {
        this.images = data;
        // recuperer le dernier element dans une liste
        //  this.image = this.images.slice(-1)[0];
        this.image = this.images[0];
        console.log(this.image)
      }
    })
  }

}
