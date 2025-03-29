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
