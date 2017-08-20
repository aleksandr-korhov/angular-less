import {Injectable, Optional} from '@angular/core';

let nextId = 1;

export class AdminServiceConfig {
  public adminName: string;
}

@Injectable()
export class AdminService {
  id = nextId++;
  private _adminName = 'Tester';

  constructor(@Optional() config: AdminServiceConfig) {
    if (config) { this._adminName = config.adminName; }
  }

  get adminName() {
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._adminName + suffix;
  }


}
