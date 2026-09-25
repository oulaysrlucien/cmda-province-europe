import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', title: 'CMDA — Province Europe',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'regions/nord', title: 'Région Nord — CMDA Province Europe',
    data: { region: 'nord' },
    loadComponent: () => import('./pages/region/region.component').then(m => m.RegionComponent)
  },
  {
    path: 'regions/sud', title: 'Région Sud — CMDA Province Europe',
    data: { region: 'sud' },
    loadComponent: () => import('./pages/region/region.component').then(m => m.RegionComponent)
  },
  { path: '**', redirectTo: '' }
];
