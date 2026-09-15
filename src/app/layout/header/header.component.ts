import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;
  // Destinations à raccorder lors de la création des prochaines sections.
  readonly navigation = ['À propos', 'Provinces', 'Vie communautaire', 'Ressources', 'Actualités', 'Contact'];
}
