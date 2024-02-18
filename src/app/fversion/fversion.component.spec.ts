import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FversionComponent } from './fversion.component';

describe('FversionComponent', () => {
  let component: FversionComponent;
  let fixture: ComponentFixture<FversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FversionComponent]
    });
    fixture = TestBed.createComponent(FversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
