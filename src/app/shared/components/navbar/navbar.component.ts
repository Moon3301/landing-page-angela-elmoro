import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: false,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    menuOpen = false;

    toggleMenu(): void {
        this.menuOpen = !this.menuOpen;
    }

    constructor(private router: Router) { }

    goToRoute(route: string): void {
        this.router.navigate([route]);
    }

    goToSection(section: string): void {
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
