export interface RegionStat {
  value: string;
  label: string;
  icon: 'people' | 'location' | 'members';
}

export interface Fraternity {
  name: string;
  location: string;
  initials: string;
  slug: string;
}

export interface RegionContent {
  name: string;
  eyebrow: string;
  introduction: string;
  description: string;
  heroImage: string;
  stats: RegionStat[];
  fraternities: Fraternity[];
}
