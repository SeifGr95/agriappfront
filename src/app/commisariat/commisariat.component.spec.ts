import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommisariatComponent } from './commisariat.component';

describe('CommisariatComponent', () => {
  let component: CommisariatComponent;
  let fixture: ComponentFixture<CommisariatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommisariatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommisariatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
