import { TestBed } from '@angular/core/testing';

import { GetGoalsService } from './get-goals.service';

describe('GetGoalsService', () => {
  let service: GetGoalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGoalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
