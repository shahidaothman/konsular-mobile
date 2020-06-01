import { TestBed } from '@angular/core/testing';

import { UisService } from './uis.service';

describe('UisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UisService = TestBed.get(UisService);
    expect(service).toBeTruthy();
  });
});
