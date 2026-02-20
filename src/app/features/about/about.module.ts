import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';

// Section components
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { AboutBioComponent } from './components/about-bio/about-bio.component';
import { AboutCtaComponent } from './components/about-cta/about-cta.component';

@NgModule({
    declarations: [
        AboutComponent,
        AboutHeaderComponent,
        AboutBioComponent,
        AboutCtaComponent
    ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        SharedModule
    ]
})
export class AboutModule { }
