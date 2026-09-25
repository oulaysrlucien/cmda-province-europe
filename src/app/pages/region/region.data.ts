import { RegionContent } from './region.model';

// Données locales provisoires. Cette structure pourra ensuite être alimentée
// sans modifier les composants par l’API REST de WordPress.
export const NORTH_REGION: RegionContent = {
  name: 'Région Nord',
  eyebrow: 'Province Europe',
  introduction: 'Une communion de fraternités au service de la prière, de la formation, de la mission et de l’évangélisation.',
  description: 'La Région Nord regroupe plusieurs fraternités de la Province Europe, présentes notamment en France, en Belgique, au Royaume-Uni et en Allemagne. Ensemble, nous vivons la spiritualité et le charisme de la CMDA dans la prière, la communion fraternelle, la formation et la mission.',
  heroImage: 'assets/images/hero_regionNord01.png',
  stats: [
    { value: '8', label: 'Fraternités', icon: 'people' },
    { value: '6', label: 'Pays', icon: 'location' },
    { value: '120+', label: 'Membres', icon: 'members' }
  ],
  fraternities: [
    { name: 'Alegria', location: 'Région Nord', initials: 'AL', slug: 'alegria' },
    { name: 'Beaumont-Sur-Oise', location: 'Région Nord', initials: 'BO', slug: 'beaumont-sur-oise' },
    { name: 'Belgique', location: 'Région Nord', initials: 'BE', slug: 'belgique' },
    { name: 'Cana', location: 'Région Nord', initials: 'CA', slug: 'cana' },
    { name: 'Persan', location: 'Région Nord', initials: 'PE', slug: 'persan' },
    { name: 'Saint-Esprit', location: 'Région Nord', initials: 'SE', slug: 'saint-esprit' },
    { name: 'Sacré-Coeur', location: 'Région Nord', initials: 'SC', slug: 'sacre-coeur' },
    { name: 'Fraternité', location: 'Région Nord', initials: 'FR', slug: 'fraternite' }
  ]
};
