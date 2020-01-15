import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformsvalidationComponent } from './reactiveformsvalidation.component';

describe('ReactiveformsvalidationComponent', () => {
  let component: ReactiveformsvalidationComponent;
  let fixture: ComponentFixture<ReactiveformsvalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveformsvalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformsvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
