import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageanimationComponent } from './imageanimation.component';

describe('ImageanimationComponent', () => {
  let component: ImageanimationComponent;
  let fixture: ComponentFixture<ImageanimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageanimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
