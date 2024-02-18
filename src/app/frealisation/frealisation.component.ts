import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-frealisation',
  templateUrl: './frealisation.component.html',
  styleUrls: ['./frealisation.component.css']
})
export class FrealisationComponent implements OnInit {
  


  showbarre1 = true;
  showbarre2 = false;
  showbarre3 = false;
  showbarre4 = false;
  showbarre5 = false;
  showbarre6 = false;
  router: any;
  /**/
 
  /*****/

  toggleshowbarre1() {
    this.showbarre1 = true;
    this.showbarre2 = false;
    this.showbarre3 = false;
    this.showbarre4 = false;
    this.showbarre5 = false;
    this.showbarre6 = false;
  }
  toggleshowbarre2() {
    this.showbarre2 = !this.showbarre2;
    this.showbarre1 = false;
    this.showbarre3 = false;
    this.showbarre4 = false;
    this.showbarre5 = false;
    this.showbarre6 = false;
  }
  toggleshowbarre3() {
    this.showbarre3 = !this.showbarre3;
    this.showbarre1 = false;
    this.showbarre2 = false;
    this.showbarre4 = false;
    this.showbarre5 = false;
    this.showbarre6 = false;
  }
  toggleshowbarre4() {
    this.showbarre4 = !this.showbarre4;
    this.showbarre1 = false;
    this.showbarre2 = false;
    this.showbarre3 = false;
    this.showbarre5 = false;
    this.showbarre6 = false
  }
  toggleshowbarre5() {
    this.showbarre5 = !this.showbarre5;
    this.showbarre1 = false;
    this.showbarre2 = false;
    this.showbarre3 = false;
    this.showbarre4 = false;
    this.showbarre6 = false;
  }
  toggleshowbarre6() {
    this.showbarre6 = !this.showbarre6;
    this.showbarre1 = false;
    this.showbarre2 = false;
    this.showbarre3 = false;
    this.showbarre4 = false;
    this.showbarre5 = false;
  }
  /************************ */
  show1 = true;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6 = false;
  show7 = false;
  show8 = false;
  
  toggle1() {
    this.show1 = true;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
  }
  
  toggle2() {
    this.show1 = false;
    this.show2 = true;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
  }
  
  toggle3() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = true;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
  }
  
  toggle4() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = true;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
  }
  
  toggle5() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = true;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
  }
  
  toggle6() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = true;
    this.show7 = false;
    this.show8 = false;
  }
  
  toggle7() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = true;
    this.show8 = false;
  }
  
  toggle8() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = true;
  }

/*********button2****** */
  

showsecond = true;
showthird =true;
showfour1 =true;
showfour2 =false;
showfive =true;
shows =true;

togglefour1(){
  this.showfour1 = true;
  this.showfour2 = false;

}
togglefour2(){
  this.showfour2 = true;
  this.showfour1 = false;
}

activeButton: string | null = 'button1';
activeButton1: string | null = 'button1';
activeButton2: string | null = 'button1';

setActiveButton(button: string) {
  if (this.activeButton !== button) {
    this.activeButton = button;
  } else {
    this.activeButton = null; // Toggle off if the same button is clicked again
  }
}
setActiveButton1(button: string) {
  if (this.activeButton1 !== button) {
    this.activeButton1 = button;
  } else {
    this.activeButton1 = null; // Toggle off if the same button is clicked again
  }
}
setActiveButton2(button: string) {
  if (this.activeButton2 !== button) {
    this.activeButton2 = button;
  } else {
    this.activeButton2 = null; // Toggle off if the same button is clicked again
  }
}
/*********************dropdown******************/
isDropdownOpen: boolean = false;

togglepopup() {
  this.isDropdownOpen = !this.isDropdownOpen;
}
/*************************************slide */
images: string[] = [
  'assets/beton/1.jpg',
  'assets/beton/2.jpg',
  'assets/beton/3.jpg',
  'assets/beton/4.jpg',
  'assets/beton/5.jpg',
  'assets/beton/6.jpg',
  'assets/beton/7.jpg',
  'assets/beton/8.jpg',
  'assets/beton/9.jpg',
];
images2 : string[] =[
  "assets/manantaly/1.jpg",
  "assets/manantaly/2.jpg",
  "assets/manantaly/3.jpg",
  "assets/manantaly/4.jpg",
  "assets/manantaly/5.jpg",
  "assets/manantaly/6.jpg",
  "assets/manantaly/7.jpg",
 "assets/manantaly/8.jpg",
];
images1: string [] =[
  "assets/b2/1.png",
  "assets/b2/2.png",
  "assets/b2/3.png",
  "assets/b2/4.png",
  "assets/b2/6.png",
  "assets/b2/7.png",
  "assets/b2/8.png",
  "assets/b2/9.png",
  "assets/b2/0.png",
  "assets/b2/11.png",
];
images3:string[]=[
  "assets/TREIGNAC/1.jpg",
  "assets/TREIGNAC/2.jpg",
  "assets/TREIGNAC/3.jpg",
  "assets/TREIGNAC/4.jpg",
  "assets/TREIGNAC/5.jpg",
  "assets/TREIGNAC/6.jpg",
  "assets/TREIGNAC/7.jpg",
  "assets/TREIGNAC/8.jpg",
  "assets/TREIGNAC/9.jpg",
  "assets/TREIGNAC/10.jpg",
  "assets/TREIGNAC/11.jpg",
  "assets/TREIGNAC/12.jpg",
]

currentImageIndex: number = 0;
currentImageIndex1: number = 0;
currentImageIndex2: number = 0;
currentImageIndex3: number = 0;
displayedImages: string[] = [];
displayedImages1: string[] = [];
displayedImages2: string[] = [];
displayedImages3: string[] = [];



ngOnInit(): void {
  this.updateDisplayedImages();
  this.updateDisplayedImages1();
  this.updateDisplayedImages2();
  this.updateDisplayedImages3();
}

updateDisplayedImages(): void {
  const endIndex = Math.min(this.currentImageIndex + 2, this.images.length);
  this.displayedImages = this.images.slice(this.currentImageIndex, endIndex);
}
updateDisplayedImages1(): void {
  const endIndex = Math.min(this.currentImageIndex1 + 3, this.images1.length);
  this.displayedImages1 = this.images1.slice(this.currentImageIndex1, endIndex);
}
updateDisplayedImages2(): void {
  const endIndex = Math.min(this.currentImageIndex2 + 3, this.images2.length);
  this.displayedImages2 = this.images2.slice(this.currentImageIndex2, endIndex);
}
updateDisplayedImages3(): void {
  const endIndex = Math.min(this.currentImageIndex3 + 3, this.images3.length);
  this.displayedImages3 = this.images3.slice(this.currentImageIndex3, endIndex);
}

prevImage(): void {
  if (this.currentImageIndex > 0) {
    this.currentImageIndex -= 1;
    this.updateDisplayedImages();
  }
  if (this.currentImageIndex1 > 0) {
    this.currentImageIndex1 -= 1;
    this.updateDisplayedImages1();
  }
  if (this.currentImageIndex2 > 0) {
    this.currentImageIndex2 -= 1;
    this.updateDisplayedImages2();
  }
  if (this.currentImageIndex3 > 0) {
    this.currentImageIndex3 -= 1;
    this.updateDisplayedImages3();
  }
}

nextImage(): void {
  if (this.currentImageIndex < this.images1.length - 3) {
    this.currentImageIndex += 1;
    this.updateDisplayedImages();
  }
  if (this.currentImageIndex1 < this.images1.length - 3) {
    this.currentImageIndex1 += 1;
    this.updateDisplayedImages1();
  }
  if (this.currentImageIndex2 < this.images2.length - 3) {
    this.currentImageIndex2 += 1;
    this.updateDisplayedImages2();
  }
  if (this.currentImageIndex3 < this.images3.length - 3) {
    this.currentImageIndex3 += 1;
    this.updateDisplayedImages3();
  }
}




}
