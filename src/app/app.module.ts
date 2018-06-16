import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { List3Component } from './list3/list3.component';
import { List4Component } from './list4/list4.component';
import { List5Component } from './list5/list5.component';

@NgModule({
  declarations: [
    AppComponent,
    List1Component,
    List2Component,
    DetailComponent,
    HomeComponent,
    List3Component,
    List4Component,
    List5Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
