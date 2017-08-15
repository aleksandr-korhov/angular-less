import { Component, Input} from '@angular/core';
import { AdminService } from '../shared/admin.service';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    @Input() subtitle: string = '';
    
    admin: string;

	constructor(private adminService: AdminService) {
        this.admin = this.adminService.adminName;
     }
}
