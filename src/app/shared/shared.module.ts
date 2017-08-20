import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CustomDatePipe} from './custom-date.pipe';
import {HighlightDirective} from './highlight.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CustomDatePipe,
    HighlightDirective,
  ],
  exports: [
    CommonModule,
    FormsModule,
    CustomDatePipe,
    HighlightDirective,
  ]
})
export class SharedModule {
}
