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

  reviews = [
    {
      review: 'Julio Salvatierra and his crew were AWESOME. From start to finish, they were great with scheduling, assessing the area, offering tips for improvements, giving options, emailing their invoice for approval [great price by the way], and actually completing the job.  They were efficient, cleaned up after themselves and completed the project without a hitch.  We are SUPER happy with the results! We highly recommend Kings Highway Asphalt without hesitation.',
      name: 'Carmen Williams',
      stars: 5
    },
    {
      review: 'Highly recommended. Prompt and professional appraisal, explained my options and the pro/cons of repair versus full replacement. In the end we went with full replacement of 2000sqft and I’m very happy with the result. Also the cheapest of 5 quotes for the work but no compromise on quality.',
      name: 'Graham C',
      stars: 5
    },
    {
      review: 'These guys did a great job.   I would definitely recommend.   Fair price and very professional.  Thanks again',
      name: 'Michael Pecora',
      stars: 5
    },
    {
      review: 'Julio and his team were great. They were timely and professional. Julio was honest and helpful in explaining my options. I would highly recommend Kings Highway Asphalt.',
      name: 'Michael Duignan',
      stars: 5
    },
    {
      review: 'Professional work quality. Reasonable prices and punctuality.',
      name: 'charlemagne 76 h',
      stars: 4
    },
    {
      review: 'Julio came over and gave us a  fair estimate.  The job was done very fast and the workers were very courteous.  Julio was very helpful and did everything he promised.',
      name: 'Leon Tomaselli',
      stars: 5
    },
    {
      review: 'Had my driveway resurfaced, they arrived on time, very happy with quality of work, driveway looks new again, clean up was excellent. I had asked Julio to refit my drain storm screen under the grates and he did come back to take care of it. Overall very satisfied.',
      name: 'Charles Adami',
      stars: 5
    },
    {
      review: 'It was great working with Julio and his team on our driveway replacement. From start to finish, he was quick to respond, explained everything, and did what he said he would do. There were no surprises, either with the invoice or the project itself. Highly recommend.',
      name: 'Mackenzie Dawson',
      stars: 5
    },
    {
      review: 'Very friendly salesman and work was performed on time.',
      name: 'K A',
      stars: 4
    },
    {
      review: 'Julio & George ( brothers) are the most professional Contractors I have ever had the pleasure to meet. We had a driveway replaced on 6/22/2020 . I never heard them say “no” or “that will be extra” to one thing we requested. They even took away some extra piles of concrete I had not been able to dispose of in my yard. They were competitively priced, on time, done in 2 days, cleaned up every inch of debris, courteous & all around easy to work with. We love the end result & would highly recommend their company!',
      name: 'Lisa Moghab',
      stars: 5
    },
    {
      review: 'Kings Highway was very good to work with. The crew showed up right on time and worked very hard for 2 full days on my shared driveway. The result was terrific and the price tag was reasonable. Julio, the owner, is very easy to talk to and very responsive to requests. They had some asphalt left over at the end of the job and went out of their way to apply it to two remaining potholes; now that\'s good initiative. Highly recommended!',
      name: 'Chris Kuehne',
      stars: 5
    },
    {
      review: 'Kings Highway was great to work with. They are good guys. They did a really nice. And their price was very competitive. When they were all done, I told them that I thought I might have an issue with a small detail. They told me not to worry there was a good reason for what they did. Give it one month to settle. Of after a month I still think it’s an issue they will come back, no problem, and take care of it. It hasn’t been a month yet. So I’ll update this post when the time comes. Until then, I highly recommend Kings Highway. Good, honest, respectable guys and work at a decent price!',
      name: 'Leo Torres',
      stars: 5
    },
    {
      review: 'My driveway was a disaster with weeds and cracks and holes in it. Julio was working on driveway at the firehouse down the street and asked if I would be interested in a quote. It was extremely competitive and based on the fact he was doing the town firehouse I agreed to work with him. He was professional, answered the phone every time and on time. He completed the driveway the next day and even honored an additional request without charging extra. He and his crew even reconnected our invisible dog fence that ran under the driveway at no charge. I would highly recommend based on our experience. It looks great.',
      name: 'Abe Gorsuch',
      stars: 5
    },
    {
      review: 'Julio was excellent to work with. On time, professional knowledge and ability.  Would hire them again in a heartbeat',
      name: 'Mike Rossi',
      stars: 5
    },
    {
      review: 'I recently had Kingshighway Asphalt transform my single driveway to a double driveway, which includes removing the old driveway and installing Bstones. I went to work and back, the drive way was completed in 8hrs. Quality work, fast, and great pricing.  I Highly recommend to All.',
      name: 'Patrick Hoyte',
      stars: 5
    },
    {
      review: 'Did a very nice job',
      name: 'George Kuzhiyanjal',
      stars: 5
    }
  ]

  displayedReviews!: any[];
  showAllReviews: boolean = false;

  ngOnInit() {
    this.displayedReviews = this.reviews.slice(0, 10); // Show first 10 reviews initially
  }

  toggleReviews() {
    this.showAllReviews = !this.showAllReviews;
    this.displayedReviews = this.showAllReviews ? this.reviews : this.reviews.slice(0, 10);
  }

}
