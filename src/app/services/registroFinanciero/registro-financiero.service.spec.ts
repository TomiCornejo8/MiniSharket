import { TestBed } from '@angular/core/testing';

import { RegistroFinancieroService } from './registro-financiero.service';

describe('RegistroFinancieroService', () => {
  let service: RegistroFinancieroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroFinancieroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
