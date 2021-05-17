import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAddEditComponent } from './food-add-edit.component';

describe('FoodAddEditComponent', () => {
  let component: FoodAddEditComponent;
  let fixture: ComponentFixture<FoodAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
