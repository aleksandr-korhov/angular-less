import {Component, ViewChild} from '@angular/core';

@Component({
  // selector: 'test',
  templateUrl: './test.component.html'
})
export class TestComponent {
  title = 'Test component';
  isDisabled = false;
  counter = 0;

  toogleButton() {
    this.isDisabled = !this.isDisabled;
  }

  show() {
    this.isDisabled = false;
  }

  hide() {
    this.isDisabled = true;
  }

  addCount() {
    this.counter++;
  }
}
