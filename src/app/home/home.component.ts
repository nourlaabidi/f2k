import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: string[] = ['assets/images/photo2.jpg', 'assets/images/photo.jpg', 'assets/images/photo3.jpg', 'assets/images/photo4.jpg', 'assets/images/photo5.jpg', 'assets/images/photo6.jpg', ]; // Add your image paths
  currentImageIndex: number = 0;

  get currentImage(): string {
    return this.images[this.currentImageIndex];
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
  
}

