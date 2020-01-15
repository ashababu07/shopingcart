import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductprojectComponent } from './productproject.component';

describe('ProductprojectComponent', () => {
  let component: ProductprojectComponent;
  let fixture: ComponentFixture<ProductprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
