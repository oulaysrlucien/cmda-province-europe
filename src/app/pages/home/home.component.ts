import { Component } from '@angular/core';
import { FeaturedEventComponent } from '../../sections/featured-event/featured-event.component';
import { HeroComponent } from '../../sections/hero/hero.component';
import { NewsComponent } from '../../sections/news/news.component';
import { PillarsComponent } from '../../sections/pillars/pillars.component';
import { PrayerCtaComponent } from '../../sections/prayer-cta/prayer-cta.component';
import { ProvincesEventsComponent } from '../../sections/provinces-events/provinces-events.component';
import { WelcomeComponent } from '../../sections/welcome/welcome.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, WelcomeComponent, PillarsComponent, ProvincesEventsComponent,
    FeaturedEventComponent, NewsComponent, PrayerCtaComponent],
  template: `
    <app-hero />
    <app-welcome />
    <app-pillars />
    <app-provinces-events />
    <app-featured-event />
    <app-news />
    <app-prayer-cta />
  `
})
export class HomeComponent {}
