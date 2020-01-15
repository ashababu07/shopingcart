import { TestBed } from '@angular/core/testing';

import { ProductprojectService } from './productproject.service';

describe('ProductprojectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductprojectService = TestBed.get(ProductprojectService);
    expect(service).toBeTruthy();
  });
});
