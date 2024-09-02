import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private apiUrl = 'http://127.0.0.1/project/backend/public/api/flights';

  constructor(private http: HttpClient) { }


  getFlights(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  updateFlight(id: number, flightData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, flightData);
  }
  deleteFlight(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  addFlight(flightData: any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1/project/backend/public/api/addflight', flightData);
  }
}
