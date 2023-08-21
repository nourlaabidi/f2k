import { Component, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  categories = [
    'Water Treatment',
    'Food Industry',
    'Concrete',
    'Foundry',
    'Chemistry',
    'Various'
  ];

  

  
}
