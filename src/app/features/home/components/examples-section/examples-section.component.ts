import { Component } from '@angular/core';

@Component({
    selector: 'app-examples-section',
    standalone: false,
    templateUrl: './examples-section.component.html',
    styleUrl: './examples-section.component.css'
})
export class ExamplesSectionComponent {
    examples = [
        'Dejaste (o estás por dejar) un rol importante —tu trabajo, un proyecto, un cargo— y te cuesta imaginar qué viene ahora.',
        'Estás pensando en reinventarte profesionalmente, pero aparecen el miedo, la culpa o la duda.',
        'Te jubilaste y, en vez de tranquilidad, sientes que algo esencial se movió o se perdió.',
        'Tus hijos se fueron de casa y no sabes qué hacer con ese tiempo y energía que ahora "te sobra".',
        'Te mudaste de ciudad o cambiaste de estilo de vida y te sientes desorientado/a, sin redes o con la motivación baja.',
        'Sientes inquietud, vacío, confusión… o estás cansado/a de "ponerle el hombro" sin ver una salida clara.',
        'Entre tantos otros escenarios posibles.'
    ];
}
