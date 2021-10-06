import { TestBed } from '@angular/core/testing';

import { PokemonNameGraphQlService } from './pokemon-name-graph-ql.service';

describe('PokemonNameGraphQlService', () => {
  let service: PokemonNameGraphQlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonNameGraphQlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
