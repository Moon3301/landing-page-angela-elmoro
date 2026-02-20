import { Component } from '@angular/core';

@Component({
    selector: 'app-accompaniment-section',
    standalone: false,
    templateUrl: './accompaniment-section.component.html',
    styleUrl: './accompaniment-section.component.css'
})
export class AccompanimentSectionComponent {
    benefits = [
        { bold: 'Claridad', text: 'para entender qué necesitas ahora.' },
        { bold: 'Confianza', text: 'para avanzar sin exigirte más de la cuenta.' },
        { bold: 'Herramientas prácticas', text: 'para sostenerte día a día.' },
        { bold: 'Un plan sencillo', text: 'que te permita moverte, incluso en medio del caos.' }
    ];
}
