import { TestBed } from '@angular/core/testing';

import { ChargementService } from './chargement.service';

describe('ChargementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChargementService = TestBed.get(ChargementService);
    expect(service).toBeTruthy();
  });
});
