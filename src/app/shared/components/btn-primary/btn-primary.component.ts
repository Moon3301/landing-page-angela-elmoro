import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-btn-primary',
    standalone: false,
    templateUrl: './btn-primary.component.html',
    styleUrl: './btn-primary.component.css'
})
export class BtnPrimaryComponent {
    @Input() label: string = 'Click';
    @Input() link: string | null = null;
    @Output() clicked = new EventEmitter<void>();

    onClick(): void {
        this.clicked.emit();
    }
}
