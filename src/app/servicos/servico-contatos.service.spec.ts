import { TestBed } from '@angular/core/testing';

import { ServicoContatosService } from './servico-contatos.service';

describe('ServicoContatosService', () => {
  let service: ServicoContatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoContatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
