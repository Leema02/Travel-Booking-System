import { TestBed } from '@angular/core/testing';

import { RhotelService } from './rhotel.service';

describe('RhotelService', () => {
  let service: RhotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
