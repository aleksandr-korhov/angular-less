import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { UsersNewComponent } from "./users-new.component";

import { UsersService } from "./users.service";

import { CustomDatePipe } from "./pipes/custom-date.pipe";

@NgModule({
    imports: [
        CommonModule,
		FormsModule,
		// RouterModule
    ],
    declarations: [UsersNewComponent, CustomDatePipe],
    exports: [UsersNewComponent],
    providers: [UsersService]
})
export class UsersModule { }
