import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  formModel = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bookingOption: '',
    appointmentDate: null,
  };

  apptBooked: boolean = false;

  // List of booking options
  services = ['Asphalt Paving Contractor', 'Commercial', 'Driveway Paving', 'Driveway Resurfacing', 'Masonry', 'Parking Lot Maintenance', 'Parking Lot Paving'];

  // Property to bind the selected value
  selectedService: string = '';
  
  constructor(private router: Router) {

  }

  onSubmit(): void {
    console.log(this.formModel);
    this.apptBooked = true;
    //this.bookingService.bookAppointment(this.formModel);
    //this.router.navigate(['/success']);
    // Perform service operations, such as HTTP requests or backend processing
  }

}
