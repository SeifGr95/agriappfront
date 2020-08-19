import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilDetailsComponent } from './accueil-details.component';

describe('AccueilDetailsComponent', () => {
  let component: AccueilDetailsComponent;
  let fixture: ComponentFixture<AccueilDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
