import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserfooditemComponent } from './view-userfooditem.component';

describe('ViewUserfooditemComponent', () => {
  let component: ViewUserfooditemComponent;
  let fixture: ComponentFixture<ViewUserfooditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserfooditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserfooditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
