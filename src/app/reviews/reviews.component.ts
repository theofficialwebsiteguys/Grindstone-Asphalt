import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {


  displayedReviews!: any[];
  showAllReviews: boolean = false;

  ngOnInit() {
    
  }

  toggleReviews() {

  }

}
