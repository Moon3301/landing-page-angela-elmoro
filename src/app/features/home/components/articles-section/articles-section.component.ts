import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';

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
export class ArticlesSectionComponent implements OnInit, OnDestroy {
    articles: Article[] = [
        {
            imageUrl: '/assets/images/article-1.webp',
            title: 'Jubilación simbólica: cerrar una etapa sin apagar tu identidad.',
            link: '#'
        },
        {
            imageUrl: '/assets/images/article-2.webp',
            title: 'Cómo tomar decisiones cuando hay incertidumbre.',
            link: '#'
        },
        {
            imageUrl: '/assets/images/article-3.webp',
            title: 'Mudanza y pertenencia: crear redes y rutinas en la nueva ciudad.',
            link: '#'
        },
        {
            imageUrl: '/assets/images/article-3.webp',
            title: 'Mudanza y pertenencia: crear redes y rutinas en la nueva ciudad.',
            link: '#'
        }
    ];

    private observer!: IntersectionObserver;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('articles-section--visible');
                        this.observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        this.observer.observe(this.el.nativeElement.querySelector('.articles-section'));
    }

    ngOnDestroy(): void {
        this.observer.disconnect();
    }
}
