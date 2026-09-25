import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface EventItem {
  day: string;
  month: string;
  title: string;
  area: string;
}

@Component({
  selector: 'app-provinces-events',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './provinces-events.component.html',
  styleUrl: './provinces-events.component.scss'
})
export class ProvincesEventsComponent {
  protected readonly events: EventItem[] = [
    {
      day: '18',
      month: 'SEPT',
      title: 'Rentrée provinciale',
      area: 'Province Europe'
    },
    {
      day: '10',
      month: 'OCT',
      title: 'Forum d’évangélisation',
      area: 'Province Europe'
    },
    {
      day: '25',
      month: 'OCT',
      title: 'Temps d’édification spirituelle',
      area: 'Province Europe'
    }
  ];
}
