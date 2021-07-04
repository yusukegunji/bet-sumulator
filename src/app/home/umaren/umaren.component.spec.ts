import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmarenComponent } from './umaren.component';

describe('UmarenComponent', () => {
  let component: UmarenComponent;
  let fixture: ComponentFixture<UmarenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmarenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmarenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
