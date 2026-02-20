import { Component } from '@angular/core';

interface Article {
    imageUrl: string;
    title: string;
    link: string;
}

@Component({
    selector: 'app-articles-section',
    standalone: false,
    templateUrl: './articles-section.component.html',
    styleUrl: './articles-section.component.css'
})
export class ArticlesSectionComponent {
    articles: Article[] = [
        {
            imageUrl: 'assets/images/article-1.png',
            title: 'Jubilación simbólica: cerrar una etapa sin apagar tu identidad.',
            link: '#'
        },
        {
            imageUrl: 'assets/images/article-2.png',
            title: 'Cómo tomar decisiones cuando hay incertidumbre.',
            link: '#'
        },
        {
            imageUrl: 'assets/images/article-3.png',
            title: 'Mudanza y pertenencia: crear redes y rutinas en la nueva ciudad.',
            link: '#'
        },
        {
            imageUrl: 'assets/images/article-3.png',
            title: 'Mudanza y pertenencia: crear redes y rutinas en la nueva ciudad.',
            link: '#'
        }
    ];
}
