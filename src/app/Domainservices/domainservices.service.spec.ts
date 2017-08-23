import { TestBed, inject } from '@angular/core/testing';

import { SpeakerListService } from './domainservices.service';

describe('DomainservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeakerListService]
    });
  });

  it('should be created', inject([SpeakerListService], (service: SpeakerListService) => {
    expect(service).toBeTruthy();
  }));
});
