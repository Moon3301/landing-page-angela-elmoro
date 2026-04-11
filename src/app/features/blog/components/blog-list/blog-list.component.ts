import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  standalone: false,
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
    visibleCount = 12;
    posts = [
        { id: '1', title: 'Jubilación simbólica: cerrar una etapa sin apagar tu identidad.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600' },
        { id: '2', title: 'Cómo tomar decisiones cuando hay incertidumbre.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
        { id: '3', title: 'Mudanza y pertenencia: crear redes y rutinas en la nueva ciudad.', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600' },
        { id: '4', title: 'Jubilación simbólica: cerrar una etapa sin apagar tu identidad.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600' },
        { id: '5', title: 'Cómo tomar decisiones cuando hay incertidumbre.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
        { id: '6', title: 'Mudanza y pertenencia: crear redes y rutinas en la nueva ciudad.', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600' },
        { id: '7', title: 'Jubilación simbólica: cerrar una etapa sin apagar tu identidad.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600' },
        { id: '8', title: 'Cómo tomar decisiones cuando hay incertidumbre.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
        { id: '9', title: 'Mudanza y pertenencia: crear redes y rutinas en la nueva ciudad.', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600' },
        { id: '10', title: 'Jubilación simbólica: cerrar una etapa sin apagar tu identidad.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600' },
        { id: '11', title: 'Cómo tomar decisiones cuando hay incertidumbre.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
        { id: '12', title: 'Mudanza y pertenencia: crear redes y rutinas en la nueva ciudad.', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600' },
        { id: '13', title: 'Jubilación simbólica: cerrar una etapa sin apagar tu identidad.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600' },
        { id: '14', title: 'Cómo tomar decisiones cuando hay incertidumbre.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
        { id: '15', title: 'Mudanza y pertenencia: crear redes y rutinas en la nueva ciudad.', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600' },
        { id: '16', title: 'Extensión de la jubilación: mitos y realidades.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600' },
        { id: '17', title: 'El arte de no decidir por miedo a equivocarse.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
        { id: '18', title: 'Nuevos horizontes tras mudanzas dolorosas.', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600' }
    ];

    get visiblePosts() {
        return this.posts.slice(0, this.visibleCount);
    }

    loadMore() {
        this.visibleCount += 6;
    }
}
