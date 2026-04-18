import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
    selector: '[appReveal]',
    standalone: false
})
export class RevealDirective implements OnInit, OnDestroy {

    /** Delay in ms before the animation fires */
    @Input() revealDelay: number = 0;

    /** Animation direction */
    @Input() revealDirection: 'up' | 'left' | 'right' | 'fade' = 'up';

    private observer!: IntersectionObserver;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        const el: HTMLElement = this.el.nativeElement;

        // Set initial hidden state via classes
        el.classList.add('reveal', `reveal--${this.revealDirection}`);
        if (this.revealDelay > 0) {
            el.style.transitionDelay = `${this.revealDelay}ms`;
        }

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal--visible');
                        this.observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        // Small delay so the initial hidden state doesn't flash for above-fold elements
        requestAnimationFrame(() => this.observer.observe(el));
    }

    ngOnDestroy(): void {
        if (this.observer) this.observer.disconnect();
    }
}
