import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { CarService } from '../car.service';
import {DecimalPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  standalone: true,
    imports: [
        DecimalPipe,
        NgIf,
        NgForOf,
        RouterLink
    ],
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  carDetails: any;
  reviews: any[] = [];
  carId!: number; // استخدم ! لتأكيد أن القيمة لن تكون null

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) { }

  ngOnInit(): void {
    const carIdParam = this.route.snapshot.paramMap.get('carId');
    if (carIdParam) {
      this.carId = +carIdParam;
      this.carService.getCarDetailsAndReviews(this.carId).subscribe(data => {
        this.carDetails = data.carDetails;
        this.reviews = data.reviews;
      });
    } else {
      // التعامل مع الحالة عندما يكون carIdParam null
      console.error('Car ID is null');
    }
  }

  protected readonly Math = Math;
}
