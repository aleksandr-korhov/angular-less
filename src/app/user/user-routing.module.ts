import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from './user.component';
import {UserListComponent} from './user-list.component';
import {UserDetailComponent} from './user-detail.component';

const routes: Routes = [
  {path: '', component: UserComponent,
    children: [
      {path: '', component: UserListComponent},
      {path: ':id', component: UserDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
