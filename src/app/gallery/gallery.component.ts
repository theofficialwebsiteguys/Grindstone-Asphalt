import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  commercial_images = [
    { src: 'assets/Commercial/1.webp', alt: 'Description of Image 1' },
    { src: 'assets/Commercial/2.webp', alt: 'Description of Image 2' },
    { src: 'assets/Commercial/3.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/4.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/5.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/6.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/7.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/8.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/10.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/11.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/12.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/13.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/14.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/15.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/16.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/17.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/18.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/19.webp', alt: 'Description of Image N' },
    { src: 'assets/Commercial/20.webp', alt: 'Description of Image N' },
  ];

  residential_images = [
    { src: 'assets/Residential/1.webp', alt: 'Description of Image 1' },
    { src: 'assets/Residential/2.webp', alt: 'Description of Image 2' },
    { src: 'assets/Residential/3.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/4.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/5.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/6.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/7.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/8.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/9.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/10.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/11.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/12.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/13.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/14.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/15.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/16.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/17.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/18.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/19.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/20.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/21.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/22.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/23.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/24.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/25.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/26.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/27.webp', alt: 'Description of Image N' },
    { src: 'assets/Residential/28.webp', alt: 'Description of Image N' },
  ];
}
