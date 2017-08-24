import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TestComponent} from './test.component';

import {TestRoutingModule} from './test-routing.module';

@NgModule({
  imports: [
    TestRoutingModule,
    // CommonModule,
    FormsModule
  ],
  declarations: [TestComponent]
})
export class TestModule {
}
