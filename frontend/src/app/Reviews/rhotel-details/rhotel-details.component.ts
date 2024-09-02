import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RhotelService } from '../rhotel.service';
import { DecimalPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-rhotel-details',
  templateUrl: './rhotel-details.component.html',
  standalone: true,
  imports: [
    DecimalPipe,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./rhotel-details.component.css']
})
export class RhotelDetailsComponent implements OnInit {
  hotelDetails: any;
  reviews: any[] = [];
  hotelId!: number;
  protected numberOfReviews: any;
  protected averageRating: any;

  constructor(
    private route: ActivatedRoute,
    private hotelService: RhotelService
  ) {}

  ngOnInit(): void {
    const hotelIdParam = this.route.snapshot.paramMap.get('hotelId');
    if (hotelIdParam) {
      this.hotelId = +hotelIdParam;
      this.hotelService.getHotelDetailsAndReviews(this.hotelId).subscribe(data => {
        console.log('Hotel Details Data:', data.hotelDetails); // تحقق من القيم هنا
        this.hotelDetails = data.hotelDetails?.hotel;
        this.numberOfReviews = data.hotelDetails?.number_of_reviews;
        this.averageRating = data.hotelDetails?.average_rating;
        this.reviews = data.reviews;
      }, error => {
        console.error('Error fetching hotel details:', error);
      });
    } else {
      console.error('Hotel ID is null');
    }
  }


  protected readonly Math = Math;
}
