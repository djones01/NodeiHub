import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import {
    Router,
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router'

import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { IAppState } from './store/index';
import { USER_GET } from './store/profile/profile.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Sets initial value to true to show loading spinner on first load
    loading: boolean = true;

  observable$: Observable<{}>;

  constructor(http: Http, store: Store<IAppState>, private router: Router) {
    this.observable$ = http
      .get('/api/public/simple')
      .map((response: Response) => response.json());

    store.dispatch({
      type: USER_GET
    });

    // subscribe to route events
    this.router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
  }

   // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.loading = true;
        }
        if (event instanceof NavigationEnd) {
            this.loading = false;
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            this.loading = false;
        }
        if (event instanceof NavigationError) {
            this.loading = false;
        }
    }
}
