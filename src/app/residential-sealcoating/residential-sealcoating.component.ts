import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-residential-sealcoating',
  standalone: true,
  imports: [HeroComponent, CommonModule],
  templateUrl: './residential-sealcoating.component.html',
  styleUrl: './residential-sealcoating.component.scss'
})
export class ResidentialSealcoatingComponent {
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
      name: 'Residential Sealcoating',
      heroName: 'Patio Design and Installation Contractor',
      image: 'https://storage.googleapis.com/the-website-guys/Grindstone-Asphalt/hero.webp',
      sections: [
        {
          title: '',
          description: [
           
          ],
          bullets: []
        },
        {
          title: '',
          description: [
           
          ],
          bullets: []
        },
        {
          title: '',
          description: [],
          bullets: [
            'Walkways',
            'Driveways',
            'Patios',
            'Retaining Walls',
            'Fire pits',
            'Grading and excavating',
            'Natural Stone'
          ]
        }
      ]
    },
    {
      index: 1,
      name: 'Retaining Walls',
      heroName: 'Retaining Walls Contractor',
      image: 'assets/retaining-walls.webp',
      sections: [
        {
          title: '',
          description: [
            ''
          ] ,
          bullets: []
        },
        {
          title: 'Protect Your Landscape With Our Retaining Walls',
          description: [
            'Retaining walls are not only decorative but also functional for preserving your property. Retaining walls help:'
          ] ,
          bullets: [
            'Prevent erosion',
            'Control water runoff',
            'Support hillsides',
            'Create terraces on slopes for more usable surface areas'
          ]
        },
        {
          title: '',
          description: [
            'Call us today to get your retaining wall project started. We can help design and build a retaining wall made from brick, stone or blocks.'
          ] ,
          bullets: []
        }
      ]
    },
    {
      index: 2,
      name: 'Walkways & Steps',
      heroName: 'Stone Walkway and Steps Contractor',
      image: 'assets/walkways-steps.webp',
      sections: [
        {
          title: '',
          description: [
           
          ] ,
          bullets: []
        },
        {
          title: 'Personalize Your New Walkway With The Best Materials',
          description: [
          
          ],
          bullets: [
            'Concrete pavers',
            'Brick pavers',
            'Porcelain pavers',
            'Flagstone',
            'Cobblestone',
            'Belgain block'
          ]
        },
        {
          title: '',
          description: [
            'Call us today to get your walkway or step project started.'
          ] ,
          bullets: []
        }
      ]
    },
    {
      index: 3,
      name: 'Masonry',
      heroName: 'Masonry Work',
      image: 'assets/masonry-work.webp',
      sections: [
        {
          title: 'Masonry Results',
          description: [
          
          ],
          bullets: []
        },
        {
          title: 'Masonry Products',
          description: [],
          bullets: [
            'Retaining walls',
            'Steps',
            'Belgian blocks',
            'Sidewalks',
            'Driveways'
          ]
        },
      ]
    }
  ];


  
  setCurrentService(index: number): void {
    this.currentService = index;
  }

}
