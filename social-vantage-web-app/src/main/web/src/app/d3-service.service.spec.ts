import { TestBed } from '@angular/core/testing';

import { D3ServiceService } from './d3-service.service';

describe('D3ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: D3ServiceService = TestBed.get(D3ServiceService);
    expect(service).toBeTruthy();
  });
});
