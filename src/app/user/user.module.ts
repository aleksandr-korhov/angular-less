import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

/* User Components */
import {UserComponent} from './user.component';
import {UserListComponent} from './user-list.component';
import {UserDetailComponent} from './user-detail.component';

/* User Routing */
import {UserRoutingModule} from './user-routing.module';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    UserDetailComponent
  ]
})
export class UserModule {
}
