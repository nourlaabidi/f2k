import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErealisationComponent } from './erealisation.component';

describe('ErealisationComponent', () => {
  let component: ErealisationComponent;
  let fixture: ComponentFixture<ErealisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErealisationComponent]
    });
    fixture = TestBed.createComponent(ErealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
