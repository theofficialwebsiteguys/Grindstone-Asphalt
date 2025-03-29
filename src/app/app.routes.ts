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

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'specials', component: SpecialsComponent },
    { path: 'residential-sealcoating', component: ResidentialSealcoatingComponent },
    { path: 'commercial-sealcoating', component: CommercialSealcoatingComponent },
    { path: 'asphalt-repair', component: AsphaltRepairComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'estimate', component: EstimateComponent },
    { path: 'line-striping', component: LineStripingComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to /home
    { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page, redirected to /home
    ];

