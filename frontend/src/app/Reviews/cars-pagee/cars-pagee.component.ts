import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import {RouterLink} from "@angular/router";
import {DecimalPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-cars-pagee',
  templateUrl: './cars-pagee.component.html',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    DecimalPipe,
    NgIf
  ],
  styleUrls: ['./cars-pagee.component.css']
})
export class CarsPageeComponent implements OnInit {
  cars: any[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(data => {
      this.cars = data;
    });
  }

  protected readonly Math = Math;
}
