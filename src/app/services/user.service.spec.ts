import { TestBed, inject } from '@angular/core/testing';

import { Services } from './user.service';

describe('Services', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Services]
    });
  });

  it('should be created', inject([Services], (service: Services) => {
    expect(service).toBeTruthy();
  }));
});
