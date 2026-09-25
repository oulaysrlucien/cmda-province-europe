import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FraternityGridComponent } from '../fraternity-grid/fraternity-grid.component';
import { RegionContent } from '../../region.model';

@Component({
  selector: 'app-region-overview',
  standalone: true,
  imports: [FraternityGridComponent, RouterLink],
  templateUrl: './region-overview.component.html',
  styleUrl: './region-overview.component.scss'
})
export class RegionOverviewComponent {
  @Input({ required: true }) region!: RegionContent;
}
