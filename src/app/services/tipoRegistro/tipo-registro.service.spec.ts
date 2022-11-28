import { TestBed } from '@angular/core/testing';

import { TipoRegistroService } from './tipo-registro.service';

describe('TipoRegistroService', () => {
  let service: TipoRegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoRegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
