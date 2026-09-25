import { RegionContent } from './region.model';

// Données locales provisoires. Cette structure pourra ensuite être alimentée
// sans modifier les composants par l’API REST de WordPress.
export const NORTH_REGION: RegionContent = {
  name: 'Région Nord',
  shortName: 'Nord',
  eyebrow: 'Province Europe',
  introduction: 'Une communion de fraternités au service de la prière, de la formation, de la mission et de l’évangélisation.',
  description: 'La Région Nord regroupe plusieurs fraternités de la Province Europe, présentes en France, en Belgique et en Allemagne. Ensemble, nous vivons la spiritualité et le charisme de la CMDA dans la prière, la communion fraternelle, la formation et la mission.',
  heroImage: 'assets/images/hero_regionNord01.png',
  stats: [
    { value: '8', label: 'Fraternités', icon: 'people' },
    { value: '3', label: 'Pays', icon: 'location' },
    { value: '120+', label: 'Membres', icon: 'members' }
  ],
  fraternities: [
    { name: 'Alegria', location: 'Hambourg - ALLEMAGNE', initials: 'AL', slug: 'alegria' },
    { name: 'Beaumont-Sur-Oise', location: 'Ile de France', initials: 'BO', slug: 'beaumont-sur-oise' },
    { name: 'Belgique', location: 'Bruxelles - BELGIQUE', initials: 'BE', slug: 'belgique' },
    { name: 'Bezons', location: 'Ile de France', initials: 'BZ', slug: 'bezons' },
    { name: 'Cana', location: 'Ile de France', initials: 'CA', slug: 'cana' },
    { name: 'Persan', location: 'Ile de France', initials: 'PE', slug: 'persan' },
    { name: 'Saint-Esprit', location: 'Ile de France', initials: 'SE', slug: 'saint-esprit' },
    { name: 'Sacré-Coeur', location: 'Ile de France', initials: 'SC', slug: 'sacre-coeur' }
  ]
};

export const SOUTH_REGION: RegionContent = {
  name: 'Région Sud',
  shortName: 'Sud',
  eyebrow: 'Province Europe',
  introduction: 'Une communion de fraternités au service de la prière, de la formation, de la mission et de l’évangélisation.',
  description: 'La Région Sud rassemble des fraternités de la Province Europe présentes en France et en Italie. Ensemble, elles vivent la spiritualité et le charisme de la CMDA dans la prière, la communion fraternelle, la formation et la mission.',
  heroImage: 'assets/images/hero_regionSud02.png',
  stats: [
    { value: '7', label: 'Fraternités', icon: 'people' },
    { value: '2', label: 'Pays', icon: 'location' },
    { value: '—', label: 'Membres', icon: 'members' }
  ],
  fraternities: [
    { name: 'Amour et Vérité', location: 'Cremona - Italie', initials: 'AV', slug: 'amour-et-verite' },
    { name: 'Buglose', location: 'Dax - France', initials: 'BU', slug: 'buglose' },
    { name: 'Bethesda', location: 'Toulouse - France', initials: 'BE', slug: 'bethesda' },
    { name: 'Isle Sur Sorgue', location: 'Vaucluse - France', initials: 'IS', slug: 'isle-sur-sorgue' },
    { name: 'Fontaine-de-Vaucluse', location: 'Vaucluse - France', initials: 'FV', slug: 'fontaine-de-vaucluse' },
    { name: 'Saint Fiacre', location: 'Meurthe-et-Moselle - France', initials: 'SF', slug: 'saint-fiacre' },
    { name: 'Trans-en-provence', location: 'Var - France', initials: 'TP', slug: 'trans-en-provence' }
  ]
};
