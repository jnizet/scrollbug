import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';
import { ActivatedRoute, Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter, first } from 'rxjs/operators';

@Component({
  selector: 'app-list4',
  templateUrl: './list4.component.html',
  styleUrls: ['./list4.component.css']
})
export class List4Component implements OnInit, AfterViewInit {

  heroes: Array<Hero>;

  scroll: Scroll;

  constructor(private route: ActivatedRoute, private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.pipe(
      filter(e => e instanceof Scroll),
      first()
    ).subscribe(e => this.scroll = e as Scroll);
  }

  ngOnInit() {
    this.heroes = this.route.snapshot.data.list;
  }

  ngAfterViewInit(): void {
    if (this.scroll && this.scroll.position) {
      this.viewportScroller.scrollToPosition(this.scroll.position);
    }
  }
}
