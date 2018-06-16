import { Component, OnInit } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ListService } from '../list.service';
import { filter, withLatestFrom } from 'rxjs/operators';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-list3',
  templateUrl: './list3.component.html',
  styleUrls: ['./list3.component.css']
})
export class List3Component {

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
      if (scrollEvent.position) {
        viewportScroller.scrollToPosition(scrollEvent.position);
      } else {
        viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

}
