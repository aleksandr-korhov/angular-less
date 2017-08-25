import {Component, ViewChild} from '@angular/core';

@Component({
  // selector: 'test',
  templateUrl: './test.component.html'
})
export class TestComponent {
  title = 'Test component';
  imgUrl = 'https://www.primefaces.org/primeng/assets/showcase/images/logo.png';
  imgAlt = 'Test img';
  isDisabled = false;
  isSpecial = false;
  counter = 0;
  btnClass = 'btn-danger';
  parentData = 'Hello from parent';
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  actionName = 'Test';

  currentHero = {
    name: 'test hero'
  };

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

  onSave(el) {
    console.log(el);
    console.log(event);
  }

  onInput(ev) {
    console.log(ev);
  }

  onDelete() {
    console.log(event);
  }
}
