import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmarenFormsComponent } from './umaren-forms.component';

describe('UmarenFormsComponent', () => {
  let component: UmarenFormsComponent;
  let fixture: ComponentFixture<UmarenFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmarenFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmarenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
