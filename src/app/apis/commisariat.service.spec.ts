import { TestBed } from '@angular/core/testing';

import { CommisariatService } from './commisariat.service';

describe('CommisariatService', () => {
  let service: CommisariatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommisariatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
