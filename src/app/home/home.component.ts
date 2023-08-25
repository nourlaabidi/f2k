import { Component} from '@angular/core';
import { trigger, state,transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    /******************************/
    images: string[] = ['assets/images/photo20.jpg', 'assets/images/photo10.jpg', 'assets/images/photo30.jpg', 'assets/images/photo40.jpg', 'assets/images/photo50.jpg', 'assets/images/photo60.jpg', ]; // Add your image paths
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
  