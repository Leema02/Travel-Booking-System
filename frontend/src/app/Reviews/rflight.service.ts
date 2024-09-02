import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RflightService {
  private apiUrl = 'http://localhost/project/backend/public/api/reviews/flight/stats';

  constructor(private http: HttpClient) { }

  getAllFlights(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Explicitly specify the type of response
  }

  getFlightDetailsAndReviews(flightId: number): Observable<any> {
    return this.http.get<any>(`http://localhost/project/backend/public/api/flights/${flightId}/details-and-reviews`);
  }
}
