import { HeroComponent } from '../hero/hero.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-specials',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './specials.component.html',
  styleUrl: './specials.component.scss'
})
export class SpecialsComponent implements OnInit {

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
      name: 'Specials',
      image: 'assets/hero.webp',
      sections: [
        {
          title: 'Don\'t Ignore Your Driveway and Other Asphalt Areas',
          description: [
            'Like your car, roof, and other important items, your driveway and other concrete areas need attention. Kings Highway Asphalt will extend the life of your asphalt with our impressive services. We\'ve been an area favorite since 2012. Get a 10% referral discount from April 1 - May 15. Contact us seven days a week for a FREE estimate. '
          ],
          bullets: []
        },
        {
          title: 'Full-Service Asphalt Company in Westchester County, NY and Rockland County, NY',
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
            'If your driveway is crumbling or starting to show cracks, call Kings Highway Asphalt for full-service driveway paving in Westchester County, NY and Rockland County, NY. Let us take care of your driveway with the following services:'
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
            'When your driveway needs help, instead of a complete replacement, it may just need a resurfacing. Let Kings Highway Asphalt perform a driveway resurfacing job that will be effective, but not as expensive.',
            'We have resurfaced hundreds of driveways since our inception in 2012 and are fully licensed and insured. Contact us for a 1-year warranty on residential driveways. '
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
          title: 'Parking Lot Paving for Rockland County, NY & Westchester County, NY',
          description: [
            'Your parking lot is the first impression your business will make on a potential customer. Make sure it is in good condition with Kings Highway Asphalt. Whether you need repairs to your existing parking lot or need a new one, we can handle the job. Contact us for a FREE estimate today.',
            'If you\'re paving a parking lot, asphalt is a cost-effective way to create a smooth, even surface. Choose Kings Highway Asphalt for all your parking lot & Commercial Paving services in Rockland & Westchester County. We have the equipment and experience needed to pave asphalt parking lots, roads and all Commercial needs.',
            'Here at Kings Highway Asphalt, communication is important to us. This means that we will always have an open line of communication with our customers. Any time you have a question, you shouldn’t hesitate to reach out to us so that we can get it sorted. We even have a Gallery page that you can use to see previous projects that we’ve worked on. What are you waiting for? Parking lot paving in Rockland County, NY is only one call away. If you’re not ready to talk on the phone yet, head over to the Request an Estimate page and fill in all of your information.'
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
            'A worn-out parking lot reflects poorly on your business. Get the use of your parking lot back in the same day with Kings Highway Asphalt. We utilize effective commercial aggregate asphalt for fast results. Call us for a FREE estimate today.',
            'Transparency is important to us. That’s why we offer free estimates with our commercial services. You will know the cost of a project before we even start. We want you to have all of the information in front of you so that you can make the decision that benefits your business. With our many years of experience, we have gathered the tools and knowledge required to tackle any job that comes our way. For the commercial paving Rockland County, NY banks on, get in touch with us today. Take a look below to see some of the different commercial services we offer.'
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
            'Potential customers are not going to want to use a parking lot that is in bad condition. Let Kings Highway Asphalt provide your business with a safe and attractive parking lot. We provide a set price per square foot, so there will be no surprises. Contact us for a FREE estimate today. ',
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
          title: 'Parking Lot Striping in Westchester County, NY',
          description: [
            'How many times have you come across a parking lot that was poorly designed? Or, found that there was no place to park? There’s a lost art to parking lot painting and roadway striping. With roads, clean and clear lines help to guide traffic. With parking lots, distinguished lines help ensure there’s adequate parking for all clients, customers, and employees. But, when parking lot lines fade, parking can be hazard and accidents can occur if people can’t see lines clearly.',
            'To help update space in your parking lot area, parking lot stripe maintenance is suggested. By applying a fresh coat of paint to lines, it can brighten your lot. Another reason to add new line striping is if you want to maximize space. You can allow for more traffic, especially in highly congested areas like shopping malls.',
            'Because first impressions matter, let Kings Highway help with your line painting needs. Protecting your investment includes regular maintenance in your parking lot or roadway. You’re letting others know that you care about all vehicle and pedestrian traffic.'
          ],
          bullets: []
        },
        {
          title: 'ADA Compliance​',
          description: [
            'Clear access to a property helps to meet federal, state, and municipal regulations. When we stripe a parking lot, there are strict guidelines as outlined by the Americans with Disabilities Act (ADA).',
            'Pavement striping and roadway markings ensure parking spaces are designated for the disabled. It helps to reduce liability because clear markers on roadways and in parking lots lead to fewer accidents.',
            'Clear markings help you avoid potential fines and penalties for not designating parking for the disabled.​'
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
