import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassNewpassComponent } from './forgot-pass-newpass.component';

describe('ForgotPassNewpassComponent', () => {
  let component: ForgotPassNewpassComponent;
  let fixture: ComponentFixture<ForgotPassNewpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPassNewpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassNewpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
