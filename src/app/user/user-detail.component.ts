import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {UserService, User} from '../core/user.service';

import {Location} from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public user: User;
  public newFio: string;
  public newPhone: string;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private route: ActivatedRoute,
              private location: Location) {
  }

  saveUser() {
    if (this.user) {
      this.user.fio = this.newFio;
      this.user.phone = this.newPhone;
    } else {
      if (this.newFio && this.newPhone) {
        this.userService.addUser(this.newFio, this.newPhone);
      }
    }

    this.location.back();
  }

  ngOnInit(): void {
    this.user = this.userService.getUser(this.route.snapshot.params['id']);

    if (this.user) {
      this.newFio = this.user.fio;
      this.newPhone = this.user.phone;
    }
  }
}
