import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobberFormComponent } from '../jobber-form/jobber-form.component';

@Component({
  standalone: true,
  selector: 'app-home-hero',
  imports: [CommonModule, RouterModule, JobberFormComponent],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss'
})
export class HomeHeroComponent {
  @Input() singleImage: string | null = null; // Image for static pages
  @Input() title: string = "Welcome To Flower Power Dispensers"; // Dynamic Title
  @Input() subtitle: string = "Premium Recreational Cannabis Dispensary.<br>Order now for pickup or FREE delivery today."; // Dynamic Subtitle
  @Input() buttons: { text: string; class: string; link?: string }[] = [
    { text: "Shop", class: "btn-primary", link: "/shop" },
    { text: "Mobile App", class: "btn-secondary", link: "/loyalty"  }
  ];
  @Input() heroHeight: string = '60vh'; // Default height for main pages

  
  images: string[] = [
    'assets/hero.webp',
    'assets/Residential/1.webp',
    'assets/Residential/24.webp',
    'assets/Residential/27.webp',
    'assets/Commercial/1.webp',
    'assets/Commercial/10.webp',
    'assets/Commercial/17.webp'
  ];
  currentIndex: number = 0;
  intervalId: any;
  showJobberModal: boolean = false;

  ngOnInit(): void {
    if (!this.singleImage) {
      // If no single image is provided, start the carousel
      this.startCarousel();
    }
  }

  toggleActive() {
    this.showJobberModal = true;
  }

  closeJobberModal() {
    this.showJobberModal = false;
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
