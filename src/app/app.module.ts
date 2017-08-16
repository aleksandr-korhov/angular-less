import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { RoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminService } from "./shared/admin.service";
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { UsersDataService } from './shared/users-data.service';

import { CustomDatePipe } from './custom-date.pipe';

import { HighlightDirective } from './highlight.directive';

import { UsersModule } from './users-new/users.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    NotFoundComponent,
    HighlightDirective,
    CustomDatePipe,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    UsersModule
  ],
  providers: [UsersDataService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
