import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookingComponent } from '../booking/booking.component';
import { JobberFormComponent } from '../jobber-form/jobber-form.component';
import { SocialsComponent } from '../socials/socials.component';

interface IsActiveMap {
  [key: number]: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BookingComponent, JobberFormComponent, SocialsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private lastScrollTop = 0;
  private isHeaderHidden = false;
  private navbarHeight: number;
  private scrollOffset = 100; // Additional scroll offset in pixels
  showJobberModal = false;

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {
    this.navbarHeight = 0;
   }

   ngAfterViewInit() {
    this.navbarHeight = this.el.nativeElement.querySelector('.bar').offsetHeight;
  }

  route(page: string) {
    this.router.navigate(['/' + page]).then(() => {
      this.mobileMenuOpen = false;
      document.body.style.overflow = ''; // Ensure scrolling is re-enabled
    });
  }
  
  isActive: IsActiveMap = {
    1: false,
    2: false,
    3: false,
    4: false
  };

  showSharePanel = false;
  showApptPanel = false;
  mobileMenuOpen = false;
  socialsModalOpen: boolean = false;
  toggleActive(divNumber: number) {
    this.isActive[divNumber] = !this.isActive[divNumber];

    if ([1, 2].includes(divNumber)) {
      this.showJobberModal = true;
    } else if ([3, 4].includes(divNumber)) {
      this.router.navigateByUrl('/contact');
    } else if (divNumber === 5) {
      this.socialsModalOpen = true;
    }
  }

  closeSocialsModal(): void {
    this.socialsModalOpen = false;
  }

  closeJobberModal() {
    this.showJobberModal = false;
  }

  toggleSharePanel(event?: MouseEvent) {
    this.showSharePanel = !this.showSharePanel;
    if (this.showSharePanel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    if (event) {
      event.stopPropagation(); // Prevent event from bubbling up and triggering the overlay click event
    }
  }

  toggleApptPanel(event?: MouseEvent) {
    this.showApptPanel = !this.showApptPanel;
    if (this.showApptPanel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    if (event) {
      event.stopPropagation(); // Prevent event from bubbling up and triggering the overlay click event
    }
  }


  shareOnFacebook() {
    const shareUrl = 'https://example.com'; // Replace with your website URL
    const facebookUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, 'facebook-share', 'width=600,height=400');
  }

  shareOnTwitter() {
    const shareUrl = 'https://example.com'; // Replace with your website URL
    const title = 'Check out this website!';
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;
    window.open(twitterUrl, 'twitter-share', 'width=600,height=400');
  }

  shareOnLinkedIn() {
    const shareUrl = 'https://example.com'; // Replace with your website URL
    const title = 'Check out this website!';
    const linkedinUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`;
    window.open(linkedinUrl, 'linkedin-share', 'width=600,height=400');
  }
  shareOnReddit() {
    const shareUrl = 'https://example.com'; // Replace with your website URL
    const title = 'Check out this website!';
    const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`;
    window.open(redditUrl, 'reddit-share', 'width=600,height=400');
  }
  shareOnEmail() {
    const shareUrl = 'https://example.com'; // Replace with your website URL
    const subject = 'Check out this website!';
    const body = 'I found this website and thought you might be interested. Check it out!';
    const emailUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(emailUrl);
  }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > this.lastScrollTop) {
      // Scrolling down
      if (currentScrollTop > this.lastScrollTop && currentScrollTop > (this.navbarHeight + this.scrollOffset)){
        this.renderer.addClass(this.el.nativeElement.querySelector('.bar'), 'header-hidden');
        this.isHeaderHidden = true;
      }
    } else {
      // Scrolling up
      if (this.isHeaderHidden) {
        this.renderer.removeClass(this.el.nativeElement.querySelector('.bar'), 'header-hidden');
        this.isHeaderHidden = false;
      }
    }

    // Update lastScrollTop but not before checking the direction
    this.lastScrollTop = currentScrollTop;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  
  

  navigateAndClose(page: string) {
    this.route(page);
    this.mobileMenuOpen = false;

    // Re-enable scrolling when navigating
    document.body.style.overflow = '';
  }
}

