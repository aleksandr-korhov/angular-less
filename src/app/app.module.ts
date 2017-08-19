import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NotFoundComponent} from './not-found/not-found.component';

/* App Root */
import {AppComponent} from './app.component';
import {TitleComponent} from './title/title.component';
import {AdminService} from './shared/admin.service';
import {HighlightDirective} from './highlight.directive';

/* Feature Modules */
import {HomeModule} from './home/home.module';

/* Routing Module */
import {AppRoutingModule} from './app-routing.module';

/* App Services */
// import {UserService} from './shared/user.service';


@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [
    AdminService,
    // UserService
  ],
  declarations: [
    AppComponent,
    TitleComponent,
    HighlightDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
