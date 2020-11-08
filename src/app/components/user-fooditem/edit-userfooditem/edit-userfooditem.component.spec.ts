import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserfooditemComponent } from './edit-userfooditem.component';

describe('EditUserfooditemComponent', () => {
  let component: EditUserfooditemComponent;
  let fixture: ComponentFixture<EditUserfooditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserfooditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserfooditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
