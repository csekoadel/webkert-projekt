import { TestBed } from '@angular/core/testing';

import { ArlistaService } from './arlista.service';

describe('ArlistaService', () => {
  let service: ArlistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArlistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
