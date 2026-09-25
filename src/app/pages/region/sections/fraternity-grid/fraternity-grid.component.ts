import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Fraternity } from '../../region.model';

@Component({
  selector: 'app-fraternity-grid',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fraternity-grid.component.html',
  styleUrl: './fraternity-grid.component.scss'
})
export class FraternityGridComponent {
  @Input({ required: true }) fraternities: Fraternity[] = [];
}
