import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgalleryComponent } from './fgallery.component';

describe('FgalleryComponent', () => {
  let component: FgalleryComponent;
  let fixture: ComponentFixture<FgalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FgalleryComponent]
    });
    fixture = TestBed.createComponent(FgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
