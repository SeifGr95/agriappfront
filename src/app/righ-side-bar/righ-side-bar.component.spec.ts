import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RighSideBarComponent } from './righ-side-bar.component';

describe('RighSideBarComponent', () => {
  let component: RighSideBarComponent;
  let fixture: ComponentFixture<RighSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RighSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RighSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
