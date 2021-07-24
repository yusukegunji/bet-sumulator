import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmatanFormsComponent } from './umatan-forms.component';

describe('UmatanFormsComponent', () => {
  let component: UmatanFormsComponent;
  let fixture: ComponentFixture<UmatanFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmatanFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmatanFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
