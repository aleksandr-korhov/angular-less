import {Component, ViewChild} from '@angular/core';

import {TestChildComponent} from './test-child.component';

@Component({
  selector: 'test',
  template: `
    <test-child>
      <h3 #testHeader>{{ name }} world!!!</h3>
    </test-child>`
})
export class TestComponent {
  name = 'Hello';
}
