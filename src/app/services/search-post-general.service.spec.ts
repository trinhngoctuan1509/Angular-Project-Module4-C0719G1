import { TestBed } from '@angular/core/testing';

import { SearchPostGeneralService } from './search-post-general.service';

describe('SearchPostGeneralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchPostGeneralService = TestBed.get(SearchPostGeneralService);
    expect(service).toBeTruthy();
  });
});
