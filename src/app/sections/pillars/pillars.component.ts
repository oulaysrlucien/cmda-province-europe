import { Component } from '@angular/core';

interface Pillar {
  title: string;
  text: string;
  icon: string;
}

@Component({
  selector: 'app-pillars',
  standalone: true,
  templateUrl: './pillars.component.html',
  styleUrl: './pillars.component.scss'
})
export class PillarsComponent {
  protected readonly pillars: Pillar[] = [
    {
      title: 'Prière',
      text: 'Une vie de prière personnelle et communautaire.',
      icon: 'assets/icones/s03_priere01.png'
    },
    {
      title: 'Communion',
      text: 'Vivre l’unité dans l’amour fraternel.',
      icon: 'assets/icones/s03_communion01.png'
    },
    {
      title: 'Formation',
      text: 'Se former pour mieux servir le Royaume.',
      icon: 'assets/icones/s03_formation01.png'
    },
    {
      title: 'Mission',
      text: 'Annoncer le Christ et servir nos frères et sœurs.',
      icon: 'assets/icones/s03_mission01.png'
    }
  ];
}
