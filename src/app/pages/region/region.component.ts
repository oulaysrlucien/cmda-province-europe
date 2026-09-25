import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NORTH_REGION, SOUTH_REGION } from './region.data';
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
  private readonly regionSlug = inject(ActivatedRoute).snapshot.data['region'];
  readonly region = this.regionSlug === 'sud' ? SOUTH_REGION : NORTH_REGION;
}
