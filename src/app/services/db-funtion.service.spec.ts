import { TestBed } from '@angular/core/testing';

import { DbFuntionService } from './db-funtion.service';

describe('DbFuntionService', () => {
  let service: DbFuntionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbFuntionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
