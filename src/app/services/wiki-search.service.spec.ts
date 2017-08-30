import { TestBed, inject } from '@angular/core/testing';
import { Jsonp, URLSearchParams, JsonpModule } from '@angular/http';

import { WikiSearchService } from './wiki-search.service';

describe('WikiSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule],
      providers: [WikiSearchService]
    });
  });

  it('should be created', inject([WikiSearchService], (service: WikiSearchService) => {
    expect(service).toBeTruthy();
  }));
});
