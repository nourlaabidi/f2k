import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationComponent } from './realisation.component';

describe('RealisationComponent', () => {
  let component: RealisationComponent;
  let fixture: ComponentFixture<RealisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealisationComponent]
    });
    fixture = TestBed.createComponent(RealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
