import { Component } from '@angular/core';

interface FaqItem {
    question: string;
    answer: string;
}

@Component({
    selector: 'app-faq-section',
    standalone: false,
    templateUrl: './faq-section.component.html',
    styleUrl: './faq-section.component.css'
})
export class FaqSectionComponent {
    faqs: FaqItem[] = [
        {
            question: '¿Cómo son las sesiones?',
            answer: 'Las sesiones son conversaciones guiadas donde trabajamos juntos en tus objetivos. Son en formato online, en un espacio seguro y confidencial.'
        },
        {
            question: '¿Cuánto dura el proceso?',
            answer: 'Depende de cada caso, pero generalmente son procesos breves y enfocados. Juntos definimos la duración según tus necesidades.'
        },
        {
            question: '¿Cuánto dura cada sesión y con qué frecuencia nos reunimos?',
            answer: 'Cada sesión dura aproximadamente 50-60 minutos. La frecuencia habitual es semanal o quincenal, según lo que funcione mejor para ti.'
        },
        {
            question: '¿Puedo cancelar o reagendar una sesión?',
            answer: 'Sí, puedes cancelar o reagendar con al menos 24 horas de anticipación.'
        }
    ];
}
