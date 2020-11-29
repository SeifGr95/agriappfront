import { TestBed } from '@angular/core/testing';

import { AdminnavService } from './adminnav.service';

describe('AdminnavService', () => {
  let service: AdminnavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminnavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
