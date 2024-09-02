import { Component, OnInit } from '@angular/core';
import { RhotelService } from "../rhotel.service";
import { RouterLink } from "@angular/router";
import { DecimalPipe, NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-hotels-pagee',
  templateUrl: './hotels-pagee.component.html',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    DecimalPipe,
    NgIf
  ],
  styleUrls: ['./hotels-pagee.component.css']
})
export class HotelsPageeComponent implements OnInit {
  hotels: any[] = [];

  constructor(private hotelService: RhotelService) { }

  ngOnInit(): void {
    this.hotelService.getAllHotels().subscribe(data => {
      this.hotels = data;
    });
  }

  protected readonly Math = Math;
}
