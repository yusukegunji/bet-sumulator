import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoHorseOptionComponent } from './two-horse-option.component';

describe('TwoHorseOptionComponent', () => {
  let component: TwoHorseOptionComponent;
  let fixture: ComponentFixture<TwoHorseOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoHorseOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoHorseOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
