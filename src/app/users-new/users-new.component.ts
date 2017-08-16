import { Component, OnInit } from '@angular/core';
import { User, UsersService } from './users.service';

@Component({
	selector: 'app-users-new',
	templateUrl: './users-new.component.html',
	styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {

	users: User[];

	constructor(protected usersService: UsersService) { }

	ngOnInit() {
		this.users = this.usersService.getUsers();
	}

}
