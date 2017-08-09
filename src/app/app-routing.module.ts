import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./user/user.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'users/form/:id', component: UserComponent },
  { path: 'users/form', component: UserComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
