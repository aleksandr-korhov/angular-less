import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {TestComponent} from './test.component';
import {TestChildComponent} from './test-child.component';

import {TestRoutingModule} from './test-routing.module';

@NgModule({
	imports: [
		TestRoutingModule,
		CommonModule,
		FormsModule
	],
	declarations: [TestComponent, TestChildComponent]
})
export class TestModule {
}
