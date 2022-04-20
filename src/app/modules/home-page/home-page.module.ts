import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from '../partial/nav/nav.component';
import { FooterComponent } from '../partial/footer/footer.component';
import { BannerComponent } from './home/banner/banner.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { OffersComponent } from './home/offers/offers.component';
import { BestSellersComponent } from './home/best-sellers/best-sellers.component';
import { CampaignsComponent } from './home/campaigns/campaigns.component';
import { StepsComponent } from './home/steps/steps.component';
import { MobileAppComponent } from './home/mobile-app/mobile-app.component';
import { IconsComponent } from './home/icons/icons.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { PartialModule } from '../partial/partial.module';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CategoriesComponent,
    OffersComponent,
    BestSellersComponent,
    CampaignsComponent,
    StepsComponent,
    MobileAppComponent,
    IconsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent },
    ]),
    ReactiveFormsModule,
    NgbCarouselModule,
    PartialModule
  ]
})
export class HomePageModule { }
