// import { Injectable } from '@angular/core';
import { User } from "./user";

// @Injectable()
export class UsersDataService {

	private data: User[] = [
    new User('Люк Скайвокер', '1234567890', new Date("2015-01-01 22:30")),
    new User('Бэтмэн', '1234567890', new Date("2016-05-01 10:30")),
    new User('Бильбо Бэгинс', '1234567890', new Date("2016-12-31 23:30")),
    new User('Дарт Вэйдер', '1234567890', new Date("2017-02-03 12:00")),
    new User('Звездный Лорд', '1234567890'),
    new User('Мастер Йода', '1234567890', new Date("2015-02-01 20:30")),
  ];

  protected sortField: string;

	getData(sortField: string = 'createdAt', sortByDesc: boolean = false) {

    if (sortByDesc) {
      this.sortByDesc(sortField);
    } else {
      this.sortBy(sortField);
    }

		return this.data;
	}

	addData(fio: string, phone: string) {
    this.data.push(new User(fio, phone));
  }

  sortBy(fieldName: string) {
    this.data.sort(function (a, b) {
      let val1 = a[fieldName];
      let val2 = b[fieldName];

      if (val1 < val2) {
        return -1
      } else if (val1 > val2) {
        return 1;
      }

      return 0;
    });
  }

  sortByDesc(sortField) {
    this.sortBy(sortField);
    this.data.reverse();
  }
}
