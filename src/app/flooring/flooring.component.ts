import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flooring',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './flooring.component.html',
  styleUrl: './flooring.component.scss'
})
export class FlooringComponent {
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
      name: 'Flooring',
      image: 'assets/hero.webp',
      sections: [
        {
          title: 'Quality Service of Seal Coating',
          description: [
            '',
            ''
          ],
          bullets: []
        }
      ]
    },
    
  ];

  faqs = [
    {
      question: 'What is the difference between polyaspartic/polyurea and epoxy?',
      answer: 'Polyaspartic/polyurea coatings cure faster, resist UV damage, and are more flexible—making them better suited for areas with temperature changes and moisture, like New England. Epoxy tends to yellow, crack, or peel under those conditions.',
      open: true
    },
    {
      question: 'How long does the installation take?',
      answer: 'Most projects—like garage floors—can be completed in just one day, thanks to the rapid cure time of polyaspartic/polyurea materials.',
      open: false
    },
    {
      question: 'How long will the coating last',
      answer: 'Most projects—like garage floors—can be completed in just one day, thanks to the rapid cure time of polyaspartic/polyurea materials.',
      open: false
    },
    {
      question: 'Is it slippery when wet?',
      answer: 'Most projects—like garage floors—can be completed in just one day, thanks to the rapid cure time of polyaspartic/polyurea materials.',
      open: false
    },
    {
      question: 'Can this be applied year-round?',
      answer: 'Most projects—like garage floors—can be completed in just one day, thanks to the rapid cure time of polyaspartic/polyurea materials.',
      open: false
    },
    {
      question: ' Is it easy to clean and maintain?',
      answer: 'Absolutely. The non-porous surface resists stains, dust, and moisture—making it simple to clean with a mop or hose.',
      open: false
    },
    {
      question: 'Will it yellow or fade over time?',
      answer: 'No. Polyaspartic topcoats are UV stable, which means they won’t yellow or degrade with sunlight exposure like epoxy can.',
      open: false
    }
  ]
  
  setCurrentService(index: number): void {
    this.currentService = index;
  }

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

}
