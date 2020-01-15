import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CregisterationComponent } from './cregisteration.component';

describe('CregisterationComponent', () => {
  let component: CregisterationComponent;
  let fixture: ComponentFixture<CregisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CregisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CregisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
