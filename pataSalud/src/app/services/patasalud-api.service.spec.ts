import { TestBed } from '@angular/core/testing';

import { PatasaludAPIService } from './patasalud-api.service';

describe('PatasaludAPIService', () => {
  let service: PatasaludAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatasaludAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
