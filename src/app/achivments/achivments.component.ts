import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achivments',
  templateUrl: './achivments.component.html',
  styleUrls: ['./achivments.component.css']
})
export class AchivmentsComponent {
  constructor(private router: Router) { }
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = rect.top + scrollTop - 120; // Adjust -50 for your desired offset
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  }
  
  
  navigateToSection(sectionId: string): void {
    this.router.navigate([], { fragment: sectionId });
    this.scrollToElement(sectionId);
  }
  /***********toggles***/
  show1 = true;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6 = false;
  show7 = false;
  show8 = false;
  show9 = false;
  show10 = false;
  show11= false;
  show12= false;
  show13= false;
  show14= false;

  
  toggle1() {
    this.show1 = true;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;

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
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
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
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
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
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
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
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
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
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
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
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
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
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
  }
  toggle9() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = true;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
  }
  
  toggle10() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = true;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
  }
  
  toggle11() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = true;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
  }
  
  toggle12() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = true;
    this.show13 = false;
    this.show14 = false;
  }
  
  toggle13() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = true;
    this.show14 = false;
  }
  
  toggle14() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = true;
  }
  
}
