import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-navbar',
    standalone: false,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
    menuOpen = false;
    private routerSub!: Subscription;

    constructor(private router: Router) {}

    ngOnInit(): void {
        // Cierra el menú automáticamente cada vez que se completa una navegación
        this.routerSub = this.router.events.pipe(
            filter(e => e instanceof NavigationEnd)
        ).subscribe(() => {
            this.menuOpen = false;
        });
    }

    ngOnDestroy(): void {
        this.routerSub?.unsubscribe();
    }

    toggleMenu(): void {
        this.menuOpen = !this.menuOpen;
    }

    closeMenu(): void {
        this.menuOpen = false;
    }

    goToRoute(route: string): void {
        this.router.navigate([route]);
    }

    goToSection(section: string): void {
        this.closeMenu();
        // Si no estamos en la página de inicio, navegar primero
        if (!this.router.url.includes('/home') && this.router.url !== '/') {
            this.router.navigate(['/home']).then(() => {
                // Esperar a que el componente se cargue antes de hacer scroll
                setTimeout(() => {
                    this.scrollToSection(section);
                }, 100);
            });
        } else {
            // Ya estamos en home, solo hacer scroll
            this.scrollToSection(section);
        }
    }

    private scrollToSection(section: string): void {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
