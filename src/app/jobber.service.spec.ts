import { TestBed } from '@angular/core/testing';

import { JobberService } from './jobber.service';

describe('JobberService', () => {
  let service: JobberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
