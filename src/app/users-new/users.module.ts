import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomDatePipe } from "./pipes/custom-date.pipe";
import { UsersComponent } from "./users.component";

import { UsersService } from "./users.service";


@NgModule({
    imports: [
        CommonModule,
		FormsModule,
    ],
    declarations: [UsersComponent, CustomDatePipe],
    exports: [UsersComponent],
    providers: [UsersService]
})
export class UsersModule { }
