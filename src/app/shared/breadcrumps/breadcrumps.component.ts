import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumps',
  templateUrl: './breadcrumps.component.html',
  styles: [],
})
export class BreadcrumpsComponent implements OnDestroy {
  title: string = '';
  titleSubs$: Subscription = new Subscription();

  constructor(private router: Router) {
    this.titleSubs$ = this.getRouteArguments().subscribe(({ title = '' }) => {
      this.title = title;
      document.title = `AdminPro - ${title}`;
    });
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getRouteArguments() {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event['snapshot'].data)
    );
  }
}
