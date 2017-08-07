// import { Injectable } from '@angular/core';
import { User } from "./user";

// @Injectable()
export class UsersDataService {

    private data: User[] = [
        {
            fio: 'Люк Скайвокер',
            phone: '1234567890',
            createdAt: new Date(),
        },
        {
            fio: 'Мастер Йода',
            phone: '1234567890',
            createdAt: new Date(),
        },
        {
            fio: 'Человек Паук',
            phone: '1234567890',
            createdAt: new Date(),
        },
        {
            fio: 'Бэтмэн',
            phone: '1234567890',
            createdAt: new Date(),
        },
        {
            fio: 'Бильбо Бэгинс',
            phone: '1234567890',
            createdAt: new Date(),
        },
        {
            fio: 'Дарт Вэйдер',
            phone: '1234567890',
            createdAt: new Date(),
        },
        {
            fio: 'Звездный Лорд',
            phone: '1234567890',
            createdAt: new Date(),
        },
    ];

    getData() {
        return this.data;
    }
}
