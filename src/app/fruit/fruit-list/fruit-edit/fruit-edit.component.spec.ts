import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitEditComponent } from './fruit-edit.component';

describe('FruitEditComponent', () => {
  let component: FruitEditComponent;
  let fixture: ComponentFixture<FruitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
