import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RflightService } from "../rflight.service";
import { DatePipe, DecimalPipe, NgClass, NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-rflight-details',
  templateUrl: './rflight-details.component.html',
  standalone: true,
  imports: [
    DecimalPipe,
    NgIf,
    NgForOf,
    DatePipe,
    NgClass
  ],
  styleUrls: ['./rflight-details.component.css']
})
export class RflightDetailsComponent implements OnInit {
  flightDetails: any;
  reviews: any[] = [];
  flightId!: number;

  constructor(
    private route: ActivatedRoute,
    private flightService: RflightService
  ) { }

  ngOnInit(): void {
    const flightIdParam = this.route.snapshot.paramMap.get('flightId');
    if (flightIdParam) {
      this.flightId = +flightIdParam;
      this.flightService.getFlightDetailsAndReviews(this.flightId).subscribe(data => {
        this.flightDetails = data.flightDetails;
        this.reviews = data.reviews;
      });
    } else {
      console.error('Flight ID is null');
    }
  }

  protected readonly Math = Math;
}
