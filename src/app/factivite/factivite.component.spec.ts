import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactiviteComponent } from './factivite.component';

describe('FactiviteComponent', () => {
  let component: FactiviteComponent;
  let fixture: ComponentFixture<FactiviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactiviteComponent]
    });
    fixture = TestBed.createComponent(FactiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
