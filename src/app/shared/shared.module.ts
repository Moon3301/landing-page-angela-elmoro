import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

import { PrimengModule } from '../primeng/primeng.module';

// Shared components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BtnPrimaryComponent } from './components/btn-primary/btn-primary.component';
import { LeadMagnetFormComponent } from './components/lead-magnet-form/lead-magnet-form.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';

// Shared directives
import { RevealDirective } from './directives/reveal.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BtnPrimaryComponent,
    LeadMagnetFormComponent,
    ArticleCardComponent,
    RevealDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PrimengModule,
    NgOptimizedImage
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    BtnPrimaryComponent,
    LeadMagnetFormComponent,
    ArticleCardComponent,
    RevealDirective,
    PrimengModule,
    NgOptimizedImage
  ]
})
export class SharedModule { }
