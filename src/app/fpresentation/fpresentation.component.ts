import { Component } from '@angular/core';

@Component({
  selector: 'app-fpresentation',
  templateUrl: './fpresentation.component.html',
  styleUrls: ['./fpresentation.component.css']
})
export class FpresentationComponent {
  showbarre1 = false;
  showbutton = true;
  showbarre2 = false;
  showbutton2 = true;
  showbarre3 = false;
  showbutton3 = true;
  
  toggleshowbarre1(){
    this.showbarre1 =!this.showbarre1 ;
    this.showbutton =!this.showbutton ;
  }
  toggleshowbarre2(){
    this.showbarre2 =!this.showbarre2 ;
    this.showbutton2 =!this.showbutton2 ;
  }
  toggleshowbarre3(){
    this.showbarre3 =!this.showbarre3 ;
    this.showbutton3 =!this.showbutton3 ;
  }
}
