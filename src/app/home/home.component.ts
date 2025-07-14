import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { Router, RouterModule } from '@angular/router';
import { JobberFormComponent } from '../jobber-form/jobber-form.component';
import { HomeHeroComponent } from '../home-hero/home-hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, RouterModule, JobberFormComponent, HomeHeroComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  isOpen: boolean = false;
  isClosingSoon: boolean = false;
  openingTime: string = '';

  imageUrl: string = 'https://storage.googleapis.com/the-website-guys/Grindstone-Asphalt/hero.webp'


  reviews: any[] = [];
  currentReviewIndex = 0;
  currentReview: any = null;
  private placeId = 'ChIJi5s7hIA2bmIRWZDBdiAQRMk';
  private apiKey = 'AIzaSyBxwQNsmDYqYus0oxTi8PU9CT1Tt3mF6B4';
  isFadingIn = false;
  isFadingOut = false;
  showJobberModal = false;

  constructor(private router: Router) { }

  route(page: string) {
    this.router.navigate(['/' + page]);
  }

  setupInitialFrame(): void {
    const video = this.videoPlayer.nativeElement;
    if (video.duration > 1) { // Check if the video is longer than 5 seconds
      video.currentTime = 1; // Seek to 5 seconds
    }
  }

  toggleActive() {
    this.showJobberModal = true;
  }

  closeJobberModal() {
    this.showJobberModal = false;
  }

  ngOnInit() {
    this.fetchGoogleReviews();
    this.updateStatus();
    setInterval(() => {
      this.updateStatus();
    }, 60000); // Update every minute
  }

  fetchGoogleReviews(): void {

    // Using a public CORS proxy
    const proxyUrl = 'https://corsproxy.io/?'; // Alternative: https://api.allorigins.win/get?
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${this.placeId}&fields=reviews&key=${this.apiKey}`;

    fetch(proxyUrl + encodeURIComponent(apiUrl))
        .then(response => response.json())
        .then(data => {
            if (data.result && data.result.reviews) {
                this.reviews = data.result.reviews;
                this.currentReview = this.reviews[this.currentReviewIndex];
                this.startReviewRotation();
            }
        })
        .catch(error => console.error('Error fetching reviews:', error));
}


  startReviewRotation(): void {
    setInterval(() => {
      this.isFadingOut = true; // Start fade-out

      setTimeout(() => {
        this.currentReviewIndex = (this.currentReviewIndex + 1) % this.reviews.length;
        this.currentReview = this.reviews[this.currentReviewIndex];
        this.isFadingOut = false;
        this.isFadingIn = true; // Start fade-in

        setTimeout(() => {
          this.isFadingIn = false; // Reset animation state
        }, 1000);
      }, 500); // Wait for fade-out before switching
    }, 5000);
  }

  updateStatus() {
    const currentHour = new Date().getHours();
    const openingHour = 6.5; // 7:00 AM
    const closingHour = 20; // 10:00 PM

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
}
