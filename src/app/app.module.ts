import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NotFoundComponent} from './not-found/not-found.component';

/* App Root */
import {AppComponent} from './app.component';

/* Feature Modules */
import {HomeModule} from './home/home.module';
import {CoreModule} from './core/core.module';

/* Routing Module */
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    CoreModule.forRoot({adminName: 'Alexandr'}),
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
