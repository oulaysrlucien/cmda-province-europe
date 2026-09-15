import { Component } from '@angular/core';

interface NewsItem {
  date: string;
  title: string;
  location: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  protected readonly news: NewsItem[] = [
    {
      date: '15 août 2026',
      title: 'Pèlerinage annuel au Centre Saint François',
      location: 'Abidjan, Côte d’Ivoire',
      image: 'assets/images/s06_img01.png',
      alt: 'Participants au pèlerinage annuel au Centre Saint François à Abidjan'
    },
    {
      date: '26 avril 2026',
      title: 'Journée mondiale de prière pour les vocations',
      location: 'Persan-Beaumont, Île-de-France',
      image: 'assets/images/s06_img02.png',
      alt: 'Journée de prière pour les vocations à Persan-Beaumont'
    },
    {
      date: '12 juillet 2026',
      title: 'GAUDETE Camp des Jeunes CMDA Province Europe',
      location: 'Province Europe',
      image: 'assets/images/s06_img03.png',
      alt: 'Jeunes de la CMDA Province Europe réunis pour le camp GAUDETE'
    },
    {
      date: '19 juillet 2026',
      title: 'Ordination diaconale 2026',
      location: 'Abidjan, Côte d’Ivoire',
      image: 'assets/images/s06_img04.png',
      alt: 'Ordination diaconale 2026 à Abidjan'
    }
  ];
}
