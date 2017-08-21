import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NotFoundComponent} from './not-found/not-found.component';

import {TestComponent} from './test/test.component';
import {TestChildComponent} from './test/test-child.component';

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
  declarations: [AppComponent, TestComponent, TestChildComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
