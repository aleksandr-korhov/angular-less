export class User {

    static curentId = 0;

    public id;

    constructor(public fio: string, public phone: string, public createdAt: Date = new Date()) {
      this.id = User.curentId++;
    }

}
