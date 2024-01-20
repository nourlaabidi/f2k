import { Component } from '@angular/core';

@Component({
  selector: 'app-factivite',
  templateUrl: './factivite.component.html',
  styleUrls: ['./factivite.component.css']
})
export class FactiviteComponent {
  selectedDepartment: string | null = "Automatismes";

  selectDepartment(event: any) {
    this.selectedDepartment = event.target.value;
  }

}
