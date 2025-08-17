import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripCard } from '../trip-card/trip-card';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css'],
  providers: [TripData]
})
export class TripListing implements OnInit {
  trips!: Trip[];
  message = '';

  constructor(
    private tripData: TripData,
    private router: Router,
    private authenticationService: AuthenticationService
    
  ) {
    console.log('trip-listing constructor');
  }

  public isLoggedIn() {                                   
    return this.authenticationService.isLoggedIn();
  }


  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  private getStuff(): void {
    this.tripData.getTrips().subscribe({
      next: (value: Trip[]) => {
        this.trips = value;
        this.message =
          value.length > 0
            ? 'There are ' + value.length + ' trips available.'
            : 'There were no trips retrieved from the database';
        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}
