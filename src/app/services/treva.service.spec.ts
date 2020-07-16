import { TestBed } from '@angular/core/testing';

import { TrevaService } from './treva.service';

describe('TrevaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrevaService = TestBed.get(TrevaService);
    expect(service).toBeTruthy();
  });
});
