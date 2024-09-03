import { Component, OnInit } from '@angular/core';
import { RflightService } from "../rflight.service";
import { RouterLink } from "@angular/router";
import {DatePipe, DecimalPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-flights-pagee',
  templateUrl: './flights-pagee.component.html',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    DecimalPipe,
    NgIf,
    DatePipe
  ],
  styleUrls: ['./flights-pagee.component.css']
})
export class FlightsPageeComponent implements OnInit {
  flights: any[] = [];

  constructor(private flightService: RflightService) { }

  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe(data => {
      this.flights = data;
    });
  }

  protected readonly Math = Math;
}
