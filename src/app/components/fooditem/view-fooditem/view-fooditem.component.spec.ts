import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFooditemComponent } from './view-fooditem.component';

describe('ViewFooditemComponent', () => {
  let component: ViewFooditemComponent;
  let fixture: ComponentFixture<ViewFooditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFooditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFooditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
