import {Injectable} from '@angular/core';

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
  new User('Иван Сусанин', '1234567890', new Date('2015-01-01 22:30')),
  new User('Тарас Бульба', '1234567890', new Date('2015-02-01 20:30')),
  new User('Вий', '1234567890', new Date('2016-05-01 10:30')),
  new User('Иван Васильевич', '1234567890', new Date('2016-12-31 23:30')),
  new User('Петька', '1234567890', new Date('2017-02-03 12:00')),
  new User('Анка-пулеметчица', '1234567890'),
];

const FETCH_LATENCY = 500;


@Injectable()
export class UserService {
  private users: User[];

  getUsers(sortField: string = 'createdAt', sortByDesc: boolean = false): User[] {

    this.users = USERS;

    if (sortByDesc) {
      this.sortByDesc(sortField);
    } else {
      this.sortBy(sortField);
    }

    return this.users;
  }

  getUser(id: number | string): User {
    // return this.getUsers()
    //     .then(users => users.find(user => user.id === +id));
    return this.getUsers().find(user => user.getId() === +id);
  }

  addUser(fio: string, phone: string) {
    this.users.push(new User(fio, phone));
  }

  sortBy(fieldName: string) {
    this.users.sort(function (a, b) {
      const val1: any = a[fieldName];
      const val2: any = b[fieldName];

      if (val1 < val2) {
        return -1;
      } else if (val1 > val2) {
        return 1;
      }

      return 0;
    });
  }

  sortByDesc(sortField) {
    this.sortBy(sortField);
    this.users.reverse();
  }
}
