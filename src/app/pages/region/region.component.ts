import { Component } from '@angular/core';
import { NORTH_REGION } from './region.data';
import { RegionHeroComponent } from './sections/region-hero/region-hero.component';
import { RegionNavComponent } from './sections/region-nav/region-nav.component';
import { RegionOverviewComponent } from './sections/region-overview/region-overview.component';

@Component({
  selector: 'app-region',
  standalone: true,
  imports: [RegionHeroComponent, RegionNavComponent, RegionOverviewComponent],
  templateUrl: './region.component.html',
  styleUrl: './region.component.scss'
})
export class RegionComponent {
  readonly region = NORTH_REGION;
}
