import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-article-card',
    standalone: false,
    templateUrl: './article-card.component.html',
    styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {
    @Input() imageUrl: string = '';
    @Input() title: string = '';
    @Input() articleLink: string = '#';
}
