import { Component } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  showimage1 = true;

  showimage2 = false;

  showimage3 = false;

  showimage4 = false;

  showimage5 = false;

  showimage6= false;

  
  
  toggleshowimages1() {
    this.showimage1 = !this.showimage1;
    this.hideImagesExcept('showimage1');
    
  }
  
  toggleshowimages2() {
    this.showimage2 = !this.showimage2;
    this.hideImagesExcept('showimage2');
    
  }
  
  toggleshowimages3() {
    this.showimage3 = !this.showimage3;
    this.hideImagesExcept('showimage3');
    
  }
  
  toggleshowimages4() {
    this.showimage4 = !this.showimage4;
    this.hideImagesExcept('showimage4');
    
  }
  
  toggleshowimages5() {
    this.showimage5 = !this.showimage5;
    this.hideImagesExcept('showimage5');
  }
  
  toggleshowimages6() {
    this.showimage6 = !this.showimage6;
    this.hideImagesExcept('showimage6');
  }
  hideImagesExcept(currentImage: string) {
    const imageProperties = ['showimage1', 'showimage2', 'showimage3', 'showimage4', 'showimage5', 'showimage6'];
    imageProperties.forEach(imageProperty => {
      if (imageProperty !== currentImage) {
        (this as any)[imageProperty] = false;
      }
    });
  }
  
  

  activeButton: string | null = 'button1';

setActiveButton(button: string) {
  if (this.activeButton !== button) {
    this.activeButton = button;
  } else {
    this.activeButton = null; // Toggle off if the same button is clicked again
  }
}
}
