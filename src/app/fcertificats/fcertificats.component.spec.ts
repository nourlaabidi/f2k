import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcertificatsComponent } from './fcertificats.component';

describe('FcertificatsComponent', () => {
  let component: FcertificatsComponent;
  let fixture: ComponentFixture<FcertificatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FcertificatsComponent]
    });
    fixture = TestBed.createComponent(FcertificatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
