import { Component } from '@angular/core';

@Component({
    selector: 'app-hero-section',
    standalone: false,
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

    openBooking(): void {
        window.open('https://calendar.app.google/ZgSqaiEG1GZCHmfA9', '_blank');
    }
}
