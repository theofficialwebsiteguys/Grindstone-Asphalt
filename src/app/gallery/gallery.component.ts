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
    residential_images: { src: string; alt: string }[] = [];
  commercial_images: { src: string; alt: string }[] = [];

  ngOnInit(): void {
    // Residential: 28 images
    this.residential_images = Array.from({ length: 28 }, (_, i) => ({
      src: `https://storage.googleapis.com/the-website-guys/Grindstone-Asphalt/Residential/${i + 1}.webp`,
      alt: `Residential driveway sealcoating in Brookfield MA – Project ${i + 1}`
    }));

    // Commercial: 20 images
    this.commercial_images = Array.from({ length: 20 }, (_, i) => ({
      src: `https://storage.googleapis.com/the-website-guys/Grindstone-Asphalt/Commercial/${i + 1}.webp`,
      alt: `Commercial asphalt maintenance in Worcester County MA – Project ${i + 1}`
    }));
  }
}
