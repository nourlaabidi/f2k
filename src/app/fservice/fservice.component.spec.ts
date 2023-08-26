import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FserviceComponent } from './fservice.component';

describe('FserviceComponent', () => {
  let component: FserviceComponent;
  let fixture: ComponentFixture<FserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FserviceComponent]
    });
    fixture = TestBed.createComponent(FserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
