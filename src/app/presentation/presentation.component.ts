import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
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
