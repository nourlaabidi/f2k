import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcontactComponent } from './fcontact.component';

describe('FcontactComponent', () => {
  let component: FcontactComponent;
  let fixture: ComponentFixture<FcontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FcontactComponent]
    });
    fixture = TestBed.createComponent(FcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
