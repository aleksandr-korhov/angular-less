import {Component} from '@angular/core';
import {
	OnChanges,
	OnInit,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy
} from '@angular/core';

@Component({
	// selector: 'test',
	templateUrl: './test.component.html'
})
export class TestComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
	AfterViewChecked, OnDestroy {
	parentData = 'Parent data';
	parentName = 'Parent name';
	hooks: any[] = [];

	changeName(event) {
		this.parentName = event;
	}

	ngOnChanges() {
		this.hooks.push('ngOnChanges');
	}

	ngOnInit() {
		this.hooks.push('ngOnInit');
	}

	ngDoCheck() {
		console.log('ngDoCheck');
	}

	ngAfterContentInit() {
		console.log('ngAfterContentInit');
	}

	ngAfterContentChecked() {
		console.log('ngAfterContentChecked');
	}

	ngAfterViewInit() {
		console.log('ngAfterViewInit');
	}

	ngAfterViewChecked() {
		console.log('ngAfterViewChecked');
	}

	ngOnDestroy() {
		console.log('ngOnDestroy');
		console.log();
		console.log();
		console.log();
	}
}
