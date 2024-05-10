import { TestBed } from '@angular/core/testing';

import { MunkakService } from './munkak.service';

describe('MunkakService', () => {
  let service: MunkakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunkakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
