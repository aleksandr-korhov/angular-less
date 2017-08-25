import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'test-child',
  inputs: ['data'],
  outputs: ['deleteRequest'],
  templateUrl: './test-child.component.html',
})
export class TestChildComponent {
  data: string;

  hero = {
    name: 'Test hero'
  };

  deleteRequest = new EventEmitter<string>();

  change() {
    this.deleteRequest.emit('change hero');
  }
}
