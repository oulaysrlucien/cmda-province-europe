import { Component, OnDestroy, OnInit } from '@angular/core';

interface HeroSlide {
  image: string;
  alt: string;
  eyebrow: string;
  title: string[];
  description: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly slides: HeroSlide[] = [
    {
      image: 'assets/images/hero_img0102.png',
      alt: 'Église et paysage au coucher du soleil',
      eyebrow: 'À Jésus',
      title: ['dans les pas', 'de Marie'],
      description: 'Une famille spirituelle unie dans l’amour du Christ et sous le regard de Marie.'
    },
    {
      image: 'assets/images/hero_img03.png',
      alt: 'Le pape accueille les fidèles en France',
      eyebrow: 'VISITE DU PAPE LÉON XIV À PARIS',
      title: ['25–28 septembre 2026'],
      description: 'La CMDA Province Europe se joint à la prière de toute l’Église et accompagne ses frères et sœurs chrétiens dans ce temps de grâce, de communion et d’espérance.'
    }
  ];

  activeSlide = 0;
  isPaused = false;
  private autoplayId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  selectSlide(index: number): void {
    this.activeSlide = index;
    this.restartAutoplay();
  }

  previousSlide(): void {
    this.selectSlide((this.activeSlide - 1 + this.slides.length) % this.slides.length);
  }

  nextSlide(): void {
    this.selectSlide((this.activeSlide + 1) % this.slides.length);
  }

  pauseAutoplay(): void {
    this.isPaused = true;
    this.stopAutoplay();
  }

  resumeAutoplay(): void {
    this.isPaused = false;
    this.startAutoplay();
  }

  private startAutoplay(): void {
    if (this.isPaused || this.autoplayId || this.slides.length < 2) return;
    this.autoplayId = setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    }, 8000);
  }

  private stopAutoplay(): void {
    if (this.autoplayId) {
      clearInterval(this.autoplayId);
      this.autoplayId = undefined;
    }
  }

  private restartAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
