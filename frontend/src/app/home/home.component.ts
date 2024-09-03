import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import AOS from "aos";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    // Initialize AOS
    // Commented out AOS initialization to ensure it is not causing issues
     if (AOS) {
       AOS.init();
     }

    // Retrieve user ID from localStorage
    this.userId = localStorage.getItem('userId');
    console.log('User ID from localStorage:', this.userId);
  }

  logout() {

    localStorage.removeItem('userId');

    this.router.navigate(['/login']);
  }
}
