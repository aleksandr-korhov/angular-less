import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./user/user.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UsersNewComponent } from "./users-new/users-new.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'users-new', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users-new', component: UsersNewComponent },
    // { path: 'users/form/:id', component: UserComponent },
    // { path: 'users/form', component: UserComponent },
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
