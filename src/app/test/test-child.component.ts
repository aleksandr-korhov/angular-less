import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'test-child',
	outputs: ['changeRequest:onChange'],
	templateUrl: './test-child.component.html',
})
export class TestChildComponent {
	@Input() data: string;
	@Input() name: number;

	hero2 = {
		name: 'Shuric'
	};

	hero = {
		name: null
	};

	date: Date = new Date();

	// @Output('onChange') changeRequest = new EventEmitter();
	@Output('onChange') changeRequest = new EventEmitter();

	change() {
		this.changeRequest.emit('Shuric');
	}
}
