import { Component } from '@angular/core';
import { FeaturedEventComponent } from './sections/featured-event/featured-event.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';
import { LegalBarComponent } from './layout/legal-bar/legal-bar.component';
import { NewsComponent } from './sections/news/news.component';
import { PillarsComponent } from './sections/pillars/pillars.component';
import { PrayerCtaComponent } from './sections/prayer-cta/prayer-cta.component';
import { ProvincesEventsComponent } from './sections/provinces-events/provinces-events.component';
import { WelcomeComponent } from './sections/welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    WelcomeComponent,
    PillarsComponent,
    ProvincesEventsComponent,
    FeaturedEventComponent,
    NewsComponent,
    PrayerCtaComponent,
    FooterComponent,
    LegalBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cmda-website';
}
