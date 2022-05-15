import { TestBed } from '@angular/core/testing';

import { ListaPropostasService } from './lista-propostas.service';

describe('ListaPropostasService', () => {
  let service: ListaPropostasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPropostasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
