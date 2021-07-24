import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShikibetuSelectorsComponent } from './shikibetu-selectors.component';

describe('ShikibetuSelectorsComponent', () => {
  let component: ShikibetuSelectorsComponent;
  let fixture: ComponentFixture<ShikibetuSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShikibetuSelectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShikibetuSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
