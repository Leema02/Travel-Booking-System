import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RhotelService {
  private apiUrl = 'http://localhost/project/backend/public/api/reviews/hotel/stats';

  constructor(private http: HttpClient) { }

  getAllHotels(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getHotelDetailsAndReviews(hotelId: number): Observable<any> {
    return this.http.get(`http://localhost/project/backend/public/api/hotels/${hotelId}/details-and-reviews`);
  }
}
