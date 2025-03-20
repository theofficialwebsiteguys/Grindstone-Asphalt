import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-commercial-sealcoating',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './commercial-sealcoating.component.html',
  styleUrl: './commercial-sealcoating.component.scss'
})
export class CommercialSealcoatingComponent {
  isOpen: boolean = false;
  openingTime: string = '';

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

    if (currentHour >= openingHour && currentHour < closingHour) {
      this.isOpen = true;
      this.openingTime = ` • Closes ${closingHour - 12}:00 PM`;
    } else {
      this.isOpen = false;
      this.openingTime = ` • Opens at ${openingHour}:00 AM`;
    }
  }

  currentService: number = 0;

  services = [
    {
      index: 0,
      name: 'Commercial Sealcoating',
      image: 'assets/hero.webp',
      sections: [
        {
          title: 'Quality Service of Seal Coating',
          description: [
            'Seal coating your driveway will extend the life of your driveway and protect your asphalt from premature aging. At Kings Highway Asphalt we will apply a high-grade sealer to protect your driveway from the elements and protect your asphalt from sun, salt, and chemical damage. Nothing extends the lifespan of your driveway quite like our seal coating services!',
            'Sealers slow the damaging oxidation and improve appearance. Implementing a maintenance program using sealcoating will extend the life of your asphalt surface, including your driveway or parking lot. A regular scheduled sealcoating program every two to three years will more than double the life of your asphalt.'
          ],
          bullets: []
        }
      ]
    },
    
  ];


  
  setCurrentService(index: number): void {
    this.currentService = index;
  }

}
