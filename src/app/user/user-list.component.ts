import {Component, OnInit} from '@angular/core';
import {User, UserService} from '../core/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(protected userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
