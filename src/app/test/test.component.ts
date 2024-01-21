import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
  
})
export class TestComponent {
  images: string[] = ['assets/images/photo20.jpg', 'assets/images/photo10.jpg', 'assets/images/photo30.jpg', 'assets/images/photo40.jpg', 'assets/images/photo50.jpg', 'assets/images/photo60.jpg','assets/images/photo11.jpg','assets/images/photo12.jpg' ]; 
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
  
changeImage(index: number) {
  this.currentImageIndex = index;
}

}
