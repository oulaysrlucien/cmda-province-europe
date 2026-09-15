import { Component } from '@angular/core';

interface EventImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-featured-event',
  standalone: true,
  templateUrl: './featured-event.component.html',
  styleUrl: './featured-event.component.scss'
})
export class FeaturedEventComponent {
  protected readonly images: EventImage[] = [
    {
      src: 'assets/images/s05_img01.png',
      alt: 'Temps de prière pendant une rencontre communautaire'
    },
    {
      src: 'assets/images/s05_img02.png',
      alt: 'Moment de louange et de communion fraternelle'
    },
    {
      src: 'assets/images/s05_img03.png',
      alt: 'Bible ouverte pendant une retraite spirituelle'
    },
    {
      src: 'assets/images/s05_img04.png',
      alt: 'Groupe réuni pour une rencontre communautaire'
    }
  ];
}
