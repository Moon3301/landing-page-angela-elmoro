import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-lead-magnet-form',
    standalone: false,
    templateUrl: './lead-magnet-form.component.html',
    styleUrl: './lead-magnet-form.component.css'
})
export class LeadMagnetFormComponent {
    /** 'dark' = white text on dark bg; 'light' = dark text on light bg */
    @Input() variant: 'dark' | 'light' = 'dark';

    email: string = '';

    onSubmit(): void {
        if (this.email) {
            console.log('Lead magnet submit:', this.email);
            // TODO: integrate with email service
        }
    }
}
