import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

/* User Components */
import {UserListComponent} from './user-list.component';

/* User Pipes */
import {CustomDatePipe} from './pipes/custom-date.pipe';
// import {UserDetailComponent} from './user-detail.component';

/* User Routing */
import {UserRoutingModule} from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
  ],
  declarations: [
    UserListComponent,
    CustomDatePipe
    // UserDetailComponent,
  ]
})
export class UserModule {
}
