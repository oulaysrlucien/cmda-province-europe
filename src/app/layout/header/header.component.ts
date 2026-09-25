import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;
  regionsOpen = false;
  private readonly element = inject(ElementRef<HTMLElement>);

  closeMenus(): void {
    this.menuOpen = false;
    this.regionsOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) this.regionsOpen = false;
  }

  closeRegionsOnFocusLeave(event: FocusEvent, container: HTMLElement): void {
    if (!(event.relatedTarget instanceof Node) || !container.contains(event.relatedTarget)) {
      this.regionsOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: MouseEvent): void {
    if (!this.element.nativeElement.contains(event.target as Node)) this.closeMenus();
  }
  // Destinations à raccorder lorsque les pages de contenu seront créées.
  readonly navigation = [
    'Qui sommes-nous ?',
    'Régions',
    'Vie communautaire',
    'Ressources',
    'Actualités',
    'Contact'
  ];
}
