import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanshoComponent } from './tansho.component';

describe('TanshoComponent', () => {
  let component: TanshoComponent;
  let fixture: ComponentFixture<TanshoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanshoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanshoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
