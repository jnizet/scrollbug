import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { List1Component } from './list1/list1.component';
import { ListResolveService } from './list-resolve.service';
import { List2Component } from './list2/list2.component';
import { DetailComponent } from './detail/detail.component';
import { List3Component } from './list3/list3.component';
import { List4Component } from './list4/list4.component';
import { List5Component } from './list5/list5.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'list1',
    component: List1Component,
    resolve: {
      list: ListResolveService
    }
  },
  {
    path: 'list2',
    component: List2Component,
  },
  {
    path: 'list3',
    component: List3Component,
  },
  {
    path: 'list4',
    component: List4Component,
    resolve: {
      list: ListResolveService
    }
  },
  {
    path: 'list5',
    component: List5Component,
  },
  {
    path: 'detail',
    component: DetailComponent
  }
];
