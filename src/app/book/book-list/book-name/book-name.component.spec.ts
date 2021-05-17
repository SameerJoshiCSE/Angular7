import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNameComponent } from './book-name.component';

describe('BookNameComponent', () => {
  let component: BookNameComponent;
  let fixture: ComponentFixture<BookNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
