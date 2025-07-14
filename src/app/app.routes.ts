import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { SpecialsComponent } from './specials/specials.component';
import { HomeComponent } from './home/home.component';
import { EstimateComponent } from './estimate/estimate.component';
import { CommercialSealcoatingComponent } from './commercial-sealcoating/commercial-sealcoating.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { ResidentialSealcoatingComponent } from './residential-sealcoating/residential-sealcoating.component';
import { AsphaltRepairComponent } from './asphalt-repair/asphalt-repair.component';
import { LineStripingComponent } from './line-striping/line-striping.component';
import { FlooringComponent } from './flooring/flooring.component';

export const routes: Routes = [
  { path: 'asphalt-sealcoating-brookfield-ma', component: HomeComponent },
  { path: 'sealcoating-specials-discounts', component: SpecialsComponent },
  { path: 'driveway-sealcoating-central-ma', component: ResidentialSealcoatingComponent },
  { path: 'parking-lot-sealcoating-brookfield', component: CommercialSealcoatingComponent },
  { path: 'asphalt-repair-patching-brookfield', component: AsphaltRepairComponent },
  { path: 'line-striping-parking-lots-ma', component: LineStripingComponent },
  { path: 'portfolio-before-after-sealcoating', component: GalleryComponent },
  { path: 'sealcoating-customer-reviews', component: ReviewsComponent },
  { path: 'faq-sealcoating-asphalt-services', component: AboutComponent },
  { path: 'free-sealcoating-estimate-brookfield', component: EstimateComponent },
  { path: 'contact-sealcoating-experts', component: ContactComponent },
  // { path: 'flooring-services', component: FlooringComponent },
  { path: '', redirectTo: '/asphalt-sealcoating-brookfield-ma', pathMatch: 'full' },
  { path: '**', redirectTo: '/asphalt-sealcoating-brookfield-ma' }
];
