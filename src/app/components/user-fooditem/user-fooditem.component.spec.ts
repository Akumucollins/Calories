import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFooditemComponent } from './user-fooditem.component';

describe('UserFooditemComponent', () => {
  let component: UserFooditemComponent;
  let fixture: ComponentFixture<UserFooditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFooditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFooditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
