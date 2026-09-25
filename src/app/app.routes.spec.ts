import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { HeaderComponent } from './layout/header/header.component';

describe('Navigation des régions', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [provideRouter(routes)] }));

  it('affiche une page distincte pour chaque région et permet de revenir à l’accueil', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/regions/nord');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe('Région Nord');
    expect(harness.routeNativeElement?.querySelector('#fraternites')?.textContent).toContain('Alegria');
    expect(harness.routeNativeElement?.querySelectorAll('.fraternity-card').length).toBe(8);
    await harness.navigateByUrl('/regions/sud');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe('Région Sud');
    expect(harness.routeNativeElement?.querySelector('#fraternites')?.textContent).toContain('Amour et Vérité');
    expect(harness.routeNativeElement?.querySelectorAll('.fraternity-card').length).toBe(7);
    await harness.navigateByUrl('/');
    expect(harness.routeNativeElement?.querySelector('app-hero')).toBeTruthy();
    expect(harness.routeNativeElement?.querySelector('a[href="/regions/nord"]')).toBeTruthy();
    expect(harness.routeNativeElement?.querySelector('a[href="/regions/sud"]')).toBeTruthy();
  });

  it('ouvre les sous-onglets et referme le menu avec Échap en restituant le focus', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    // Le navigateur de test peut utiliser une largeur qui replie la navigation.
    fixture.componentInstance.menuOpen = true;
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const toggle = element.querySelector<HTMLButtonElement>('.regions-toggle')!;
    const submenu = element.querySelector<HTMLElement>('#regions-submenu')!;
    expect(submenu.hidden).toBeTrue();
    toggle.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(submenu.hidden).toBeFalse();
    const link = submenu.querySelector<HTMLAnchorElement>('a')!;
    link.focus();
    link.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();
    expect(submenu.hidden).toBeTrue();
    expect(document.activeElement).toBe(toggle);
  });

  it('ferme le menu mobile et le sous-menu après le choix d’une région', async () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    element.querySelector<HTMLButtonElement>('.menu-toggle')!.click();
    element.querySelector<HTMLButtonElement>('.regions-toggle')!.click();
    fixture.detectChanges();
    expect(element.querySelector('.navigation.is-open')).toBeTruthy();
    element.querySelector<HTMLAnchorElement>('a[href="/regions/sud"]')!.click();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(element.querySelector('.navigation.is-open')).toBeNull();
    expect(element.querySelector<HTMLElement>('#regions-submenu')!.hidden).toBeTrue();
  });
});
