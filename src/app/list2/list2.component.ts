import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Hero } from '../models/hero.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {

  heroes: Array<Hero>;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.fetchHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
