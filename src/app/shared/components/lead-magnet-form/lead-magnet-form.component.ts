import { Component, Input } from '@angular/core';
import { EmailService } from '../../../core/services/email.service';

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
    loading: boolean = false;
    submitted: boolean = false;
    error: boolean = false;

    constructor(private emailService: EmailService) {}

    onSubmit(): void {
        if (!this.email || this.loading) return;

        this.loading = true;
        this.error = false;

        this.emailService.sendRoadmapEmail(
            { 
                email: this.email, 
                subject: 'Solicitud de hoja de ruta - Web Angela El Moro', 
                message: `
                    <p>Hola Angela,</p>
                    <p>Un usuario ha solicitado el envio a su correo de la hoja de ruta a través del formulario de la web Angela El Moro.</p>
                    <p>El correo del usuario es: ${this.email}</p>

                    <p>Este mensaje fue enviado automáticamente por el sistema de la web Angela El Moro.</p>
                    <p>Gracias.</p>
                `
            }).subscribe({
            next: () => {
                this.submitted = true;
                this.loading = false;
                this.email = '';
            },
            error: () => {
                this.error = true;
                this.loading = false;
            }
        });
    }
}
