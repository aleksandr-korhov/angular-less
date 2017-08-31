import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'test-child',
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

	@Output() onChange = new EventEmitter();

	change() {
		this.onChange.emit('Shuric');
	}
}
