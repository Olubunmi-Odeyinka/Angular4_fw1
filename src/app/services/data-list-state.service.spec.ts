import { TestBed, inject } from '@angular/core/testing';

import { DataListStateService } from './data-list-state.service';

describe('DataListStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataListStateService]
    });
  });

  it('should ...', inject([DataListStateService], (service: DataListStateService) => {
    expect(service).toBeTruthy();
  }));
});
