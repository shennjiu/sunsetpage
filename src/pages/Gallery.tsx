import React, { useState } from 'react';
import { Image, Mountain, Waves, Building2, Sun } from 'lucide-react';
import ThemeButton from '../components/ThemeButton';
import SunsetCard from '../components/SunsetCard';

const themes = [
  { id: 'all', name: 'All Sunsets', icon: Sun },
  { id: 'mountain', name: 'Mountain Sunsets', icon: Mountain },
  { id: 'ocean', name: 'Ocean Sunsets', icon: Waves },
  { id: 'urban', name: 'Urban Sunsets', icon: Building2 }
];

const sunsets = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    type: 'mountain',
    location: 'Swiss Alps'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b',
    type: 'ocean',
    location: 'Maldives'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb',
    type: 'urban',
    location: 'New York City'
  }
];

const Gallery = () => {
  const [activeTheme, setActiveTheme] = useState('all');

  const filteredSunsets = activeTheme === 'all' 
    ? sunsets 
    : sunsets.filter(sunset => sunset.type === activeTheme);

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Image className="h-8 w-8 text-orange-400" />
        <h1 className="text-3xl font-bold text-orange-100">Themed Gallery</h1>
      </div>

      <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
        {themes.map(theme => (
          <ThemeButton
            key={theme.id}
            icon={theme.icon}
            name={theme.name}
            isActive={activeTheme === theme.id}
            onClick={() => setActiveTheme(theme.id)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSunsets.map(sunset => (
          <SunsetCard
            key={sunset.id}
            image={sunset.image}
            location={sunset.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;