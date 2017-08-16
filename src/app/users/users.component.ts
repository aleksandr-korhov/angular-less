import { Component, OnInit } from '@angular/core';
import { User, UsersService } from './users.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	users: User[];

	constructor(protected usersService: UsersService) { }

	ngOnInit() {
		this.users = this.usersService.getUsers();
	}

}
