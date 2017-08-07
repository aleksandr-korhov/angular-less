import { Component, OnInit } from '@angular/core';
import { UsersDataService } from "../shared/users-data.service";
import { User } from "../shared/user";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [UsersDataService]
})
export class HomeComponent implements OnInit {

    users: User[];

    fio:string;
    phone:string;

    constructor(private usersDataService: UsersDataService) { }

    ngOnInit() {
        this.users = this.usersDataService.getData().slice(0,5);
    }

}
