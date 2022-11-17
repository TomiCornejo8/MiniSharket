import { TestBed } from '@angular/core/testing';

import { RegistroProductoService } from './registro-producto.service';

describe('RegistroProductoService', () => {
  let service: RegistroProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
