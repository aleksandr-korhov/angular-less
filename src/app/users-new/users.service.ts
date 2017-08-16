import { Injectable } from '@angular/core';

export class User {

    static curentId = 0;

    protected id;

    constructor(public fio: string, public phone: string, public createdAt: Date = new Date()) {
        this.id = User.curentId++;
    }

    public getId() {
        return this.id;
    }

}

const USERS: User[] = [
    new User('Иван Сусанин', '1234567890', new Date("2015-01-01 22:30")),
    new User('Тарас Бульба', '1234567890', new Date("2015-02-01 20:30")),
    new User('Вий', '1234567890', new Date("2016-05-01 10:30")),
    new User('Иван Васильевич', '1234567890', new Date("2016-12-31 23:30")),
    new User('Петька', '1234567890', new Date("2017-02-03 12:00")),
    new User('Анка-пулеметчица', '1234567890'),
];

const FETCH_LATENCY = 500;


@Injectable()
export class UsersService {

    getUsers(): User[] {
        // return new Promise<User[]>(resolve => {
        //     setTimeout(() => { resolve(USERS); }, FETCH_LATENCY);
        // });
        return USERS;
    }

    getUser(id: number | string): User {
        // return this.getUsers()
        //     .then(users => users.find(user => user.id === +id));
        return this.getUsers().find(user => user.getId() === +id);
    }

}
