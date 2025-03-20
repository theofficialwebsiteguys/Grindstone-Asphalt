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
  images = [
    { src: 'assets/gal1.webp', alt: 'Description of Image 1' },
    { src: 'assets/gal2.webp', alt: 'Description of Image 2' },
    { src: 'assets/gal3.webp', alt: 'Description of Image N' },
    { src: 'assets/gal4.webp', alt: 'Description of Image N' },
    { src: 'assets/gal5.webp', alt: 'Description of Image N' },
    { src: 'assets/gal6.webp', alt: 'Description of Image N' },
    { src: 'assets/gal7.webp', alt: 'Description of Image N' },
    { src: 'assets/gal8.webp', alt: 'Description of Image N' },
    { src: 'assets/gal9.webp', alt: 'Description of Image N' },
    { src: 'assets/gal10.webp', alt: 'Description of Image N' },
    { src: 'assets/gal11.webp', alt: 'Description of Image N' },
    { src: 'assets/gal12.webp', alt: 'Description of Image N' },
    { src: 'assets/gal13.webp', alt: 'Description of Image N' },
    { src: 'assets/gal14.webp', alt: 'Description of Image N' },
    { src: 'assets/gal15.webp', alt: 'Description of Image N' },
    { src: 'assets/gal16.webp', alt: 'Description of Image N' },
    { src: 'assets/gal17.webp', alt: 'Description of Image N' },
    { src: 'assets/gal18.webp', alt: 'Description of Image N' },
    { src: 'assets/gal19.webp', alt: 'Description of Image N' },
    { src: 'assets/gal20.webp', alt: 'Description of Image N' },
    { src: 'assets/gal21.webp', alt: 'Description of Image N' },
    { src: 'assets/gal22.webp', alt: 'Description of Image N' },
    { src: 'assets/gal23.webp', alt: 'Description of Image N' },
    { src: 'assets/gal24.webp', alt: 'Description of Image N' },
  ];
}
