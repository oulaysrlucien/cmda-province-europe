import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-region-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './region-nav.component.html',
  styleUrl: './region-nav.component.scss'
})
export class RegionNavComponent {
  @Input({ required: true }) regionName = '';
}
