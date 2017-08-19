import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';

import {HomeRoutingModule} from './home-routing.module';

import {UserService} from '../shared/user.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent],
  providers: [UserService]
})
export class HomeModule {
}
