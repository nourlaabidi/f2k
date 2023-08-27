import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnewsComponent } from './fnews.component';

describe('FnewsComponent', () => {
  let component: FnewsComponent;
  let fixture: ComponentFixture<FnewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FnewsComponent]
    });
    fixture = TestBed.createComponent(FnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
