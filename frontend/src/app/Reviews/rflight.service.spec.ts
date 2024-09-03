import { TestBed } from '@angular/core/testing';

import { RflightService } from './rflight.service';

describe('RflightService', () => {
  let service: RflightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RflightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
