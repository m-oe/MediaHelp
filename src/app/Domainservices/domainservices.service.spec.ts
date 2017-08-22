import { TestBed, inject } from '@angular/core/testing';

import { DomainservicesService } from './domainservices.service';

describe('DomainservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomainservicesService]
    });
  });

  it('should be created', inject([DomainservicesService], (service: DomainservicesService) => {
    expect(service).toBeTruthy();
  }));
});
