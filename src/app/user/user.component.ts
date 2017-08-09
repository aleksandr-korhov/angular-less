import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../shared/user';
import { UsersDataService } from '../shared/users-data.service';

import { Location } from '@angular/common';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  newFio: string;
  newPhone: string;

  constructor(
    private usersDataService: UsersDataService,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  saveUser() {
    if (this.user) {
      this.user.fio = this.newFio;
      this.user.phone = this.newPhone;
    } else {
      if (this.newFio && this.newPhone)
        this.usersDataService.addUser(this.newFio, this.newPhone);
    }

    this.location.back();
  }

  ngOnInit(): void {
    this.user = this.usersDataService.getUser(this.route.snapshot.params['id']);

    if (this.user) {
      this.newFio = this.user.fio;
      this.newPhone = this.user.phone;
    }
  }
}
