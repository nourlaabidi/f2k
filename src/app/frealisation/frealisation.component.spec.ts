import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrealisationComponent } from './frealisation.component';

describe('FrealisationComponent', () => {
  let component: FrealisationComponent;
  let fixture: ComponentFixture<FrealisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrealisationComponent]
    });
    fixture = TestBed.createComponent(FrealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
