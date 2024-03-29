import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassEmailComponent } from './forgot-pass-email.component';

describe('ForgotPassEmailComponent', () => {
  let component: ForgotPassEmailComponent;
  let fixture: ComponentFixture<ForgotPassEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPassEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
