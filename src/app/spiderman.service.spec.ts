import { TestBed } from '@angular/core/testing';

import { SpidermanService } from './spiderman.service';

describe('SpidermanService', () => {
  let service: SpidermanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpidermanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
