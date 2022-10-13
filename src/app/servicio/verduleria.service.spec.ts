import { TestBed } from '@angular/core/testing';

import { VerduleriaService } from './verduleria.service';

describe('VerduleriaService', () => {
  let service: VerduleriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerduleriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
