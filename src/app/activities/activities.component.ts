import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  selectedDepartment: string | null = "Automatismes";

  selectDepartment(event: any) {
    this.selectedDepartment = event.target.value;
  }
}
