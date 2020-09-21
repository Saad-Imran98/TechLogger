import { TestBed } from '@angular/core/testing';

import { FirebaseIssueService } from './firebase-issue.service';

describe('FirebaseIssueService', () => {
  let service: FirebaseIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
