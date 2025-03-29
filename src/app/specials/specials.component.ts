import { HeroComponent } from '../hero/hero.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobberFormComponent } from '../jobber-form/jobber-form.component';

@Component({
  selector: 'app-specials',
  standalone: true,
  imports: [CommonModule, HeroComponent, JobberFormComponent],
  templateUrl: './specials.component.html',
  styleUrl: './specials.component.scss'
})
export class SpecialsComponent implements OnInit {

  isOpen: boolean = false;
  openingTime: string = '';
  showJobberModal = false;

  ngOnInit() {
    this.updateStatus();
    setInterval(() => {
      this.updateStatus();
    }, 60000); // Update every minute
  }

  toggleActive() {
    this.showJobberModal = true;
  }

  closeJobberModal() {
    this.showJobberModal = false;
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
      name: 'Specials',
      image: 'assets/hero.webp',
      sections: [
        {
          title: 'Don\'t Ignore Your Driveway and Other Asphalt Areas',
          description: [
          
          ],
          bullets: []
        },
        {
          title: '',
          description: [],
          bullets: [
            'New asphalt installation',
            'Asphalt repairs',
            'Driveway or parking lot expansion',
            'Driveway crack repair',
            'Parking lot resurfacing',
            'Curb installation',
            'Parking lot striping',
            'Masonry'
          ]
        }
      ]
    },
    {
      index: 1,
      name: 'Driveway Paving',
      image: 'assets/driveway-paving.webp',
      sections: [
        {
          title: 'Is Your Driveway an Eyesore?',
          description: [
            ''
          ] ,
          bullets: [
            'Driveway installation',
            'Driveway expansion',
            'Driveway repairs',
            'Driveway resurfacing'
          ]
        },
        {
          title: '1-Year Residential Driveway Warranty',
          description: [
            'Besides our already-reasonable prices, we will offer you a 1-year warranty on your home driveway.'
          ] ,
          bullets: []
        }
      ]
    },
    {
      index: 2,
      name: 'Driveway Resurfacing',
      image: 'assets/driveway-resurfacing.webp',
      sections: [
        {
          title: 'Affordable Driveway Resurfacing',
          description: [
           
          ] ,
          bullets: []
        },
        {
          title: 'All Kinds of Driveways',
          description: [],
          bullets: [
            'Commercial driveways',
            'Residential driveways'
          ]
        }
      ]
    },
    {
      index: 3,
      name: 'Parking Lot Paving',
      image: 'assets/parking-lot-paving.webp',
      sections: [
        {
          title: '',
          description: [
           
          ],
          bullets: []
        },
        {
          title: 'Asphalt Parking Lots',
          description: [],
          bullets: [
            'Can be installed faster than concrete lots',
            'Cost less to install than concrete lots',
            'Can last up to 20 - 25 years with proper maintenance'
          ]
        },
        {
          title: 'Update your Existing Parking Lot',
          description: [
            'Over time, asphalt surfaces can become worn. Instead of replacing your damaged asphalt surface completely, save time and money by resurfacing it.',
          ],
          bullets: []
        },
        {
          title: 'Asphalt Resurfacing',
          description: [],
          bullets: [
            'Adds a new layer of asphalt over the existing layer',
            'Keeps your surface safe for everyone to walk and drive on',
            'Costs less than replacing the surface',
            'Extends the life of your surface'
          ]
        }
      ]
    },
    {
      index: 4,
      name: 'Commercial Paving',
      image: 'assets/commercial-paving.webp',
      sections: [
        {
          title: 'Get Your Parking Lot Back Today',
          description: [
           
          ],
          bullets: []
        },
        {
          title: 'Our Commercial Services',
          description: [],
          bullets: [
            'Paving',
            'Resurfacing',
            'Milling'
          ]
        },
        {
          title: 'Commercial Entities',
          description: [],
          bullets: [
            'Retail',
            'Churches',
            'Fire stations',
            'Apartment complex',
            'Condo Complex',
            'Banks',
            'And more...'
          ]
        }
      ]
    },
    {
      index: 5,
      name: 'Parking Lot Maintenance',
      image: 'assets/parking.webp',
      sections: [
        {
          title: 'Safe Parking Lots',
          description: [
          
          ],
          bullets: []
        },
        {
          title: 'Full-Service Concrete Company',
          description: [],
          bullets: [
            'Resurfacing',
            'Mill sections',
            'Install block to damaged sections',
            'Crack fillings',
            'Patchwork',
            'Repaving',
            'Asphalt overlay',
            'Resurfacing',
            'Pot hole repairs',
            'And more...',
          ]
        }
      ]
    },
    {
      index: 6,
      name: 'Line Striping',
      image: 'assets/line-striping.webp',
      sections: [
        {
          title: '',
          description: [
          
          ],
          bullets: []
        },
        {
          title: 'ADA Compliance​',
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
