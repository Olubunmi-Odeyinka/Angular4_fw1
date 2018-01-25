import { TestBed, inject } from '@angular/core/testing';

import { DataItemStateService } from './data-item-state.service';

describe('DataItemStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataItemStateService]
    });
  });

  it('should ...', inject([DataItemStateService], (service: DataItemStateService) => {
    expect(service).toBeTruthy();
  }));
});
