import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookingComponent } from '../booking/booking.component';

interface IsActiveMap {
  [key: number]: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BookingComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private lastScrollTop = 0;
  private isHeaderHidden = false;
  private navbarHeight: number;
  private scrollOffset = 100; // Additional scroll offset in pixels

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {
    this.navbarHeight = 0;
   }

   ngAfterViewInit() {
    this.navbarHeight = this.el.nativeElement.querySelector('.bar').offsetHeight;
  }

  route(page: string) {
    this.router.navigate(['/' + page]);
  }
  

  isActive: IsActiveMap = {
    1: false,
    2: false,
    3: false,
    4: false
  };

  showSharePanel = false;
  showApptPanel = false;

  toggleActive(divNumber: number) {
    switch (divNumber) {
      case 1:
        // Redirect to the URL for reading reviews
        this.router.navigateByUrl('/reviews');
        break;
      case 2:
        // Redirect to the URL for messaging
        window.open('https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F104991507892332%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink%26source_id%3D1441792%26recurring_notification%3D0', '_blank');
        break;
      case 3:
        // Redirect to the URL for emailing
        window.open('mailto:julio@kingshighwayasphalt.net?subject=Questions About Your Business&body=');
        break;
      case 4:
        // Redirect to the URL for sharing
        this.toggleSharePanel()
        break;
      default:
        break;
    }
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

}

