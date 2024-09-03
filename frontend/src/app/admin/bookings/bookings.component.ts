import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {BookingService} from "../../services/booking.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit {
  carBookings: any[] = [];
  hotelBookings: any[] = [];
  flightBookings: any[]=[];

  constructor(private bookingService: BookingService) {
  }

  ngOnInit(): void {
    this.fetchCarBookings();
    this.fetchHotelBookings();
    this.fetchFlightBookings();
  }

  fetchCarBookings(): void {
    this.bookingService.getCarBookings().subscribe({
      next: data => this.carBookings = data,
      error: err => console.error('Error fetching car bookings:', err)
    });
  }

  fetchHotelBookings(): void {
    this.bookingService.getHotelBookings().subscribe(data => {
      this.hotelBookings = data;
    });
  }
  fetchFlightBookings(): void {
    this.bookingService.getFlightBookings().subscribe(data => {
      this.flightBookings = data;
    });
  }

}
