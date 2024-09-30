import { Component, Input, OnInit, inject } from '@angular/core';
import { MenuItem, salesDepartmentItems } from '@app/models';
import { ApiService } from '@app/services';
import { ButtonMenuItemComponent } from '../button-menu-item/button-menu-item.component';
import {
  studentResponse,
  studentUserResponse,
} from '../interfaces/student/student';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [ButtonMenuItemComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  @Input() isSidebarOpen = false;

  ngOnInit() {

  }


  setMenuItems() {
      this.menuItems = salesDepartmentItems;
  }
}
