import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'site-header',
  standalone: true,
  templateUrl: 'site-header.html',
  styleUrl: 'site-header.scss',
  imports: [RouterModule],
})
export class SiteHeader {
    
    isMenuOpen = signal<boolean>(false);

    toggleMenu(): void{
        this.isMenuOpen.set(!this.isMenuOpen());
    }

    closeMenu(): void {
        this.isMenuOpen.set(false);
    }
 }
