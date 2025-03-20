import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-estimate',
  standalone: true,
  imports: [
    HttpClientModule // Add HttpClientModule here
  ],
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent {

  constructor() {}

  sendEmail() {

  }
}
