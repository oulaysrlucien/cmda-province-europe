import { Component, Input } from '@angular/core';
import { RegionContent } from '../../region.model';

@Component({
  selector: 'app-region-hero',
  standalone: true,
  templateUrl: './region-hero.component.html',
  styleUrl: './region-hero.component.scss'
})
export class RegionHeroComponent {
  @Input({ required: true }) region!: RegionContent;
}
