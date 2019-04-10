import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookBooksComponent } from './mook-books.component';

describe('MookBooksComponent', () => {
  let component: MookBooksComponent;
  let fixture: ComponentFixture<MookBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
