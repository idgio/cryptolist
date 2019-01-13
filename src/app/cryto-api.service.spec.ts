import { TestBed } from '@angular/core/testing';

import { CrytoApiService } from './cryto-api.service';

describe('CrytoApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrytoApiService = TestBed.get(CrytoApiService);
    expect(service).toBeTruthy();
  });
});
