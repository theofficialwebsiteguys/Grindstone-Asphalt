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
      image: 'assets/hero.webp',
      sections: [
        {
          title: 'Enhance Your Landscape with a Beautiful Patio Hardscape in Westchester County, NY',
          description: [
            'Kings Highway Asphalt will guide you through the sometimes-overwhelming task of planning, and designing a paver walk, wall or patio system for you. They will visit the site and work with you to create a unique design and suggest style and color of stone that best fits your property. We provide complete hardscaping in Westchester County, NY for any home or landscape. Contact us seven days a week for a FREE estimate. '
          ],
          bullets: []
        },
        {
          title: 'Renovate Existing Patios or Build New in Westchester County, NY',
          description: [
            'We can update your existing backyard by designing a new patio or walk, using pavers by Ideal, Techo-Bloc, Unilock, and natural stone products. If you already have a patio, walkway or steps that are in need of renovation, repair or cleaning, we can take a look and provide you with numerous options to help renovate and restore what you already have. We can analyze your existing patio or walk to determine the structural integrity and review the overall appearance. In most cases, if pavers are damaged or stained, they can be fixed or replaced. Call us today to get started!'
          ],
          bullets: []
        },
        {
          title: 'Hardscaping Services in Westchester County, NY for Entertainment, Beauty, and More',
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
          title: 'Retaining Walls in Westchester County, NY ',
          description: [
            'Whether you\'re looking to create gorgeous spaces for flower beds or need to prevent soil erosion and control water runoff, you can always count on Kings Highway for the best in retaining wall design and installation services for your landscape. Our contractors have 25 years of masonry experience for all your paver retaining wall needs. Call us today for your free estimate! Se habla Español!'
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
          title: 'Paver Walkways in Westchester County, NY',
          description: [
            'Enjoy the outdoors with a new paver patio, walkway, or garden path installed by the experts at Kings Highway. We offer a wide variety of paving stone styles and colors for a unique look for your backyard. Choose from bricks, stones, or pavers from the top brand names like Unilock, Belgard, and Cambridge for amazing results.',
            'Call us today for a free estimate on your new patio, walkway. We are licensed in Westchester and Rockland Counties. We take pride in being the masonry contractors in Westchester County, NY and the surrounding areas rely on. '
          ] ,
          bullets: []
        },
        {
          title: 'Personalize Your New Walkway With The Best Materials',
          description: [
            'Let the experts at Kings Highway help design and install your walkway or steps. We have a variety of high-quality materials to choose from that will blend with your existing property seamlessly, including:'
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
            'Broken or cracked concrete is not only unattractive, but a safety hazard. Kings Highway Asphalt will keep your property safe with outstanding masonry work. We offer a 1-year warranty on residential driveways. Contact us for a FREE estimate today. '
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
