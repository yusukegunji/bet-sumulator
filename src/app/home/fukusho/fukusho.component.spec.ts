import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FukushoComponent } from './fukusho.component';

describe('FukushoComponent', () => {
  let component: FukushoComponent;
  let fixture: ComponentFixture<FukushoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FukushoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FukushoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
