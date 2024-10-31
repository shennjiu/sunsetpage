export interface SunsetPost {
  id: number;
  image: string;
  likes: string;
  comments: string;
  location: string;
  date?: string;
  reflection?: string;
  weather?: string;
  type?: string;
}

export interface SunsetAlert {
  time: string;
  location: string;
  weather: string;
  quality: 'Excellent' | 'Good' | 'Fair' | 'Poor';
}

export interface SunsetJournalEntry {
  id: number;
  date: string;
  location: string;
  reflection: string;
  image?: string;
  weather?: string;
  mood?: string;
}