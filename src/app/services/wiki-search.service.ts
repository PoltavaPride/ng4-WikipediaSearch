import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class WikiSearchService {

  constructor(private jsonp: Jsonp) { }

  search(terms: Observable<string>, debounce = 300) {
    return terms.debounceTime(debounce)
                .distinctUntilChanged()
                .switchMap(term => this.rawSearch(term));
  }

  rawSearch(term: string) {
    const search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');

    return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
                .map((request) => request.json()[1]);
  }

}
