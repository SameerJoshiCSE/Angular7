import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitNameComponent } from './fruit-name.component';

describe('FruitNameComponent', () => {
  let component: FruitNameComponent;
  let fixture: ComponentFixture<FruitNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
