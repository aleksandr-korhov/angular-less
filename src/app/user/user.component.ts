import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  id:number;
  queryParams:any;

  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.routeSubscription = activatedRoute.params.subscribe(params=>this.id=params['id']);
    this.querySubscription = activatedRoute.queryParams.subscribe(params=>this.queryParams=params);

    console.log(this);
  }

  goHome() {
    this.router.navigate(['']);
  }

  goUsers() {
    this.router.navigate(['users']);
  }

  goPrev() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }
}
