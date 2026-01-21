export interface AnimeSeries {
  id: string;
  title: string;
  slug: string;
  description: string;
  origin_story: string;
  timeline: string;
  power_system: string;
  category: string;
  image_url: string;
  banner_url: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
  alternative_title_en: string;
  alternative_title_jp: string;
  alternative_title_other: string;
  episodes: number;
  genres: string[];
  status: string;
  release_date: string | null;
  studio: string;
  rating: string;
  trailer_url: string;
  score: number;
  rank: number | null;
  members: number;
  favorites: number;
  platforms: string[];
}

export interface Character {
  id: string;
  anime_id: string;
  name: string;
  slug: string;
  role: string;
  description: string;
  origin_story: string;
  image_url: string;
  created_at: string;
  name_english: string;
  name_native: string;
  introduction: string;
  biography: string;
  voice_actor_jp: string;
  voice_actor_en: string;
  birthdate: string;
  sex: string;
  age: Record<string, string>;
  status: string;
  height: string;
  weight: string;
  blood_type: string;
  rank: string;
  occupation: string;
  affiliation: string;
  team: string;
  partner: string;
  clan_family: string;
  kekkei_genkai: string;
  nature_types: string[];
  special_skills: string[];
  jutsu_techniques: Array<{ name: string; description: string; type?: string }>;
  tools_weapons: Array<{ name: string; description: string; type?: string }>;
  appearances: Record<string, string>;
  family_members: Array<{ name: string; relationship: string }>;
  banner_image_url: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  anime_id: string | null;
  image_url: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface UpcomingRelease {
  id: string;
  title: string;
  slug: string;
  description: string;
  release_date: string;
  release_type: string;
  trailer_url: string;
  image_url: string;
  anime_id: string | null;
  created_at: string;
}
