import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PrimengModule } from '../primeng/primeng.module';

// Shared components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BtnPrimaryComponent } from './components/btn-primary/btn-primary.component';
import { LeadMagnetFormComponent } from './components/lead-magnet-form/lead-magnet-form.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BtnPrimaryComponent,
    LeadMagnetFormComponent,
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PrimengModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    BtnPrimaryComponent,
    LeadMagnetFormComponent,
    ArticleCardComponent,
    PrimengModule
  ]
})
export class SharedModule { }
