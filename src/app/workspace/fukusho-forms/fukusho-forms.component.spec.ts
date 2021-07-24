import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FukushoFormsComponent } from './fukusho-forms.component';

describe('FukushoFormsComponent', () => {
  let component: FukushoFormsComponent;
  let fixture: ComponentFixture<FukushoFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FukushoFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FukushoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
