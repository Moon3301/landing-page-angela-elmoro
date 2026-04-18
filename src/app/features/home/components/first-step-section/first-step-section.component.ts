import { Component } from '@angular/core';

@Component({
    selector: 'app-first-step-section',
    standalone: false,
    templateUrl: './first-step-section.component.html',
    styleUrl: './first-step-section.component.css'
})
export class FirstStepSectionComponent {
    openBooking(): void {
        window.open('https://calendar.app.google/ZgSqaiEG1GZCHmfA9', '_blank');
    }
}
