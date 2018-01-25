import { TestBed, inject } from '@angular/core/testing';

import { UnsavedGuardService } from './unsaved-guard.service';

describe('UnsavedGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsavedGuardService]
    });
  });

  it('should ...', inject([UnsavedGuardService], (service: UnsavedGuardService) => {
    expect(service).toBeTruthy();
  }));
});
