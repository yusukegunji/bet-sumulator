import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanshoFormsComponent } from './tansho-forms.component';

describe('TanshoFormsComponent', () => {
  let component: TanshoFormsComponent;
  let fixture: ComponentFixture<TanshoFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanshoFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanshoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
