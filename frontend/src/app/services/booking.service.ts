import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) {
  }

  getCarBookings(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1/project/backend/public/api/car-bookings');
  }
  getHotelBookings(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1/project/backend/public/api/hotel-bookings');
  }
  getFlightBookings(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1/project/backend/public/api/flight-bookings');
  }
}
