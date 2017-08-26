import {Component} from '@angular/core';

@Component({
	// selector: 'test',
	templateUrl: './test.component.html'
})
export class TestComponent {
	parentData = 'Parent data';
	parentName = 'Parent name';

	changeName(event) {
		this.parentName = event;
	}
}
