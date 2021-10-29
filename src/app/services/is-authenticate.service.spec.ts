import { TestBed } from '@angular/core/testing';

import { IsAuthenticateService } from './is-authenticate.service';

describe('IsAuthenticateService', () => {
  let service: IsAuthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsAuthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
