import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-region-south',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="coming-soon">
      <p>CMDA · Province Europe</p>
      <h1>Région Sud</h1>
      <section id="fraternites">
        <h2>Présentation et fraternités</h2>
        <p>Le contenu de la Région Sud sera disponible prochainement.</p>
      </section>
      <a routerLink="/">← Retour à l’accueil</a>
    </main>
  `,
  styles: [`
    .coming-soon { width: min(900px, 90%); min-height: 55vh; margin: auto; padding: 70px 0; }
    h1 { margin: 8px 0 35px; font: 700 clamp(42px, 7vw, 70px)/1 Georgia, serif; }
    section { padding: 28px; margin-bottom: 35px; border-radius: 14px; background: #f3f0f8; }
    a { color: var(--cmda-navy); font-weight: 700; }
  `]
})
export class RegionSouthComponent {}
