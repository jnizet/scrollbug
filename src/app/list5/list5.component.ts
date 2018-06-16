import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { delay, filter, withLatestFrom } from 'rxjs/operators';
import { Router, Scroll } from '@angular/router';
import { Hero } from '../models/hero.model';
import { ViewportScroller } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-list5',
  templateUrl: './list5.component.html',
  styleUrls: ['./list5.component.css']
})
export class List5Component {

  heroes: Array<Hero>;

  constructor(router: Router, viewportScroller: ViewportScroller, listService: ListService) {
    const scrollEvents = router.events.pipe(
      filter(e => e instanceof Scroll)
    );

    listService.fetchHeroes().pipe(
      withLatestFrom(scrollEvents)
    ).subscribe(([list, e]) => {
      this.heroes = list;
      const scrollEvent = e as Scroll;
      of(scrollEvent).pipe(delay(1)).subscribe(s => {
        if (s.position) {
          viewportScroller.scrollToPosition(s.position);
        } else {
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
    });
  }

}
