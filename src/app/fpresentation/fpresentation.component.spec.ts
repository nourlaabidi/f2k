import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpresentationComponent } from './fpresentation.component';

describe('FpresentationComponent', () => {
  let component: FpresentationComponent;
  let fixture: ComponentFixture<FpresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FpresentationComponent]
    });
    fixture = TestBed.createComponent(FpresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
