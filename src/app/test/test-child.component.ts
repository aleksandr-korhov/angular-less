import {Component, ContentChild} from '@angular/core';

@Component({
  selector: 'test-child',
  template: `
    <ng-content></ng-content>
    <button (click)="change()">Изменить</button>`
})
export class TestChildComponent {
  @ContentChild('testHeader') content: any;

  change() {
    console.log(this.content);
    this.content.nativeElement.textContent = 'Bye!';
  }
}
