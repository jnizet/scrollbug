import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {

  heroes: Array<Hero>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.heroes = this.route.snapshot.data.list;
  }

}
