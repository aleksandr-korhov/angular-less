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

    protected fio:string;
    protected phone:string;

    public sortByDesc: boolean = false;

    protected limit: number = 5;

    constructor(private usersDataService: UsersDataService) { }

    addUser() {
      let fio:string = this.fio;
      let phone:string = this.phone;

      if (fio && phone)
        this.usersDataService.addData(fio, phone);

      this.fio = '';
      this.phone = '';
    }

    sortByDate() {

      this.users = this.usersDataService.getData('createdAt', this.sortByDesc);//.slice(0,this.limit);

      this.sortByDesc = !this.sortByDesc;

    }

    ngOnInit() {

        this.sortByDate();

    }

}
