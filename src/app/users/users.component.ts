import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { UsersDataService } from "../shared/users-data.service";
import { User } from "../shared/user";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    providers: [UsersDataService],
})
export class UsersComponent implements OnInit {

    users: User[];

    constructor(protected router: Router, protected usersDataService: UsersDataService) { }

    addUser() {
        this.router.navigate(['users/form']);
    }

    ngOnInit() {
        this.users = this.usersDataService.getData();
    }

}
