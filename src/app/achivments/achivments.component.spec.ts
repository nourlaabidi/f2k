import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchivmentsComponent } from './achivments.component';

describe('AchivmentsComponent', () => {
  let component: AchivmentsComponent;
  let fixture: ComponentFixture<AchivmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchivmentsComponent]
    });
    fixture = TestBed.createComponent(AchivmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
