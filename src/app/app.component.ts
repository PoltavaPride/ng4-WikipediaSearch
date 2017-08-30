import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

import { WikiSearchService } from './services/wiki-search.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [

    trigger('searchBarAnimation', [
      transition('* => *', [
        query('input', style({ opacity: 0 }), { optional: true }),
        query('input', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))
        ]), { optional: true })
      ])
    ]),

    trigger('headerAnimation', [
      transition('* => *', [
        query('h1', style({ opacity: 0, transform: 'translateX(-50px)' })),
        query('h1', stagger('500ms', [
          animate('800ms 1s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ]))
      ])
    ])

  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  title = 'Wiki Search';

  items:  Observable<Array<string>>;

  term$ = new Subject<string>();

  constructor (private wikiSearchService: WikiSearchService) {}

  ngOnInit() {
    this.items = this.wikiSearchService.search(this.term$);
  }

}
