import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NgIf,
    RouterLinkActive
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  isSubmenuOpen=false;
  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

}
