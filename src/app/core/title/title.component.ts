import {Component, Input} from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  @Input() subtitle: string;

  admin: string;

  constructor(private adminService: AdminService) {
    this.admin = this.adminService.adminName;
  }
}
