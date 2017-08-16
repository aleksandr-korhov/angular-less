import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
// import { UserComponent } from "./user/user.component";
// import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: UsersComponent },
    // { path: 'home', component: HomeComponent },
    // { path: 'users', component: UsersComponent },
    // { path: 'users/form/:id', component: UserComponent },
    // { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
