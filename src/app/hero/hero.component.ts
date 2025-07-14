import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobberFormComponent } from '../jobber-form/jobber-form.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, JobberFormComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  isOpen: boolean = false;
  isClosingSoon: boolean = false;
  openingTime: string = '';

  @Input() title: string = ''; // Input for title
  @Input() subTitle?: string = ''; // Input for title
  @Input() cta?: string = ''; // Input for title
  @Input() imageUrl: string = ''; // Input for image URL
  @Input() width: number = 400; // Input for image URL

  showJobberModal: boolean = false;

  ngOnInit() {
    this.updateStatus();
    setInterval(() => {
      this.updateStatus();
    }, 60000); // Update every minute
  }

  updateStatus() {
    const currentHour = new Date().getHours();
    const openingHour = 7; // 7:00 AM
    const closingHour = 22; // 10:00 PM

    if (currentHour >= openingHour && currentHour < closingHour && currentHour <= closingHour - 2) {
      this.isOpen = true;
      this.isClosingSoon = false;
      this.openingTime = ` • Closes ${closingHour - 12}:00 PM`;
    } else if (currentHour >= openingHour && currentHour < closingHour) {
      this.isClosingSoon = true;
      this.isOpen = false;
      this.openingTime = ` • Closing Soon ${closingHour - 12}:00 PM`;
    }
    else {
      this.isOpen = false;
      this.isClosingSoon = false;
      this.openingTime = ` • Opens at ${openingHour}:00 AM`;
    }
  }

  toggleActive() {
    this.showJobberModal = true;
  }

  closeJobberModal() {
    this.showJobberModal = false;
  }

}
