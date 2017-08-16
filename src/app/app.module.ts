import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersDataService } from './shared/users-data.service';
import { CustomDatePipe } from './custom-date.pipe';

/* App Root */
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { AdminService } from "./shared/admin.service";
import { HighlightDirective } from './highlight.directive';

/* Feature Modules */
import { UsersModule } from './users-new/users.module';

/* Routing Module */
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
    imports: [
        BrowserModule,
        UsersModule,
        AppRoutingModule,
        // FormsModule,
    ],
    declarations: [
        AppComponent,
        TitleComponent,
        HighlightDirective,
        // HomeComponent,
        // UsersComponent,
        // UserComponent,
        // NotFoundComponent,
        // CustomDatePipe,
    ],
    providers: [UsersDataService, AdminService],
    bootstrap: [AppComponent]
})
export class AppModule { }
