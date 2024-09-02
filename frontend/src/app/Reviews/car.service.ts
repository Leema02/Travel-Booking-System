import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost/project/backend/public/api/cars';

  constructor(private http: HttpClient) { }

  getCarDetailsAndReviews(carId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${carId}/details-and-reviews`);
  }

  getAllCars(): Observable<any> {
    return this.http.get("http://localhost/project/backend/public/api/reviews/cars/stats");
  }
}
