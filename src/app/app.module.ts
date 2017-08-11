import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { RoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

import { UsersDataService } from './shared/users-data.service';
import { CustomDatePipe } from './custom-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    UsersComponent,
    UserComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [UsersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
