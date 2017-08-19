import {Component, OnInit} from '@angular/core';

import {UserService, User} from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  public users: User[];

  protected fio: string;
  protected phone: string;

  protected limit = 5;
  public sortByDesc = true;

  constructor(private userService: UserService) {
  }

  sortByDate() {
    this.sortByDesc = !this.sortByDesc;
    this.users = this.getUsers();
  }

  ngOnInit() {
    this.users = this.getUsers();
  }

  getUsers() {
    return this.userService.getUsers('createdAt', this.sortByDesc).slice(0, this.limit);
  }
}
