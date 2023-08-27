import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EclientsComponent } from './eclients.component';

describe('EclientsComponent', () => {
  let component: EclientsComponent;
  let fixture: ComponentFixture<EclientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EclientsComponent]
    });
    fixture = TestBed.createComponent(EclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
