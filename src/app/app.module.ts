import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NotFoundComponent} from './not-found/not-found.component';

import {TestModule} from './test/test.module';

/* App Root */
import {AppComponent} from './app.component';

/* Feature Modules */
import {HomeModule} from './home/home.module';
import {CoreModule} from './core/core.module';

/* Routing Module */
import {AppRoutingModule} from './app-routing.module';

import {EmojiPickerModule} from 'angular2-emoji-picker';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot({adminName: 'Alexandr'}),
    HomeModule,
    AppRoutingModule,
	EmojiPickerModule.forRoot()
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
