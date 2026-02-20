import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';

// Section components
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ExamplesSectionComponent } from './components/examples-section/examples-section.component';
import { LeadMagnetSectionComponent } from './components/lead-magnet-section/lead-magnet-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { IsForMeSectionComponent } from './components/is-for-me-section/is-for-me-section.component';
import { AccompanimentSectionComponent } from './components/accompaniment-section/accompaniment-section.component';
import { FirstStepSectionComponent } from './components/first-step-section/first-step-section.component';
import { ArticlesSectionComponent } from './components/articles-section/articles-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { DownloadSectionComponent } from './components/download-section/download-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    ExamplesSectionComponent,
    LeadMagnetSectionComponent,
    AboutSectionComponent,
    IsForMeSectionComponent,
    AccompanimentSectionComponent,
    FirstStepSectionComponent,
    ArticlesSectionComponent,
    FaqSectionComponent,
    DownloadSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
