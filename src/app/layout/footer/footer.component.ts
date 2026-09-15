import { Component } from '@angular/core';

interface FooterLink {
  label: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly quickLinks: FooterLink[] = [
    { label: 'Accueil' },
    { label: 'À propos' },
    { label: 'Nos provinces' },
    { label: 'Vie communautaire' },
    { label: 'Ressources' },
    { label: 'Contact' }
  ];

  protected readonly resources: FooterLink[] = [
    { label: 'Prières' },
    { label: 'Formations' },
    { label: 'Médiathèque' },
    { label: 'Documents' },
    { label: 'FAQ' }
  ];
}
