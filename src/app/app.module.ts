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
import { HighlightDirective } from './highlight.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminService } from "./shared/admin.service";
import { FormComponent } from './users-new/form/form.component';

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
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [UsersDataService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
