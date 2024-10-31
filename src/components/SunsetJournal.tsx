import React from 'react';
import { Book, Plus, Sun, Cloud } from 'lucide-react';
import type { SunsetJournalEntry } from '../types';

const journalEntries: SunsetJournalEntry[] = [
  {
    id: 1,
    date: '2024-03-10',
    location: 'Venice Beach, CA',
    reflection: 'The colors today were absolutely breathtaking. The way the orange melted into purple reminded me of why I love chasing sunsets.',
    weather: 'Clear skies',
    mood: 'Peaceful',
    image: 'https://images.unsplash.com/photo-1501436513145-30f24e19fcc8'
  },
  {
    id: 2,
    date: '2024-03-09',
    location: 'Griffith Observatory, LA',
    reflection: 'Watching the sun set over the city lights was magical. The urban landscape added a unique dimension to the natural beauty.',
    weather: 'Partly cloudy',
    mood: 'Inspired',
    image: 'https://images.unsplash.com/photo-1518183225770-46354635c5a4'
  }
];

const SunsetJournal = () => {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <Book className="h-8 w-8 text-orange-400" />
          <h2 className="text-3xl font-bold text-orange-100">My Sunset Journal</h2>
        </div>
        <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
          <Plus className="h-5 w-5" />
          <span>New Entry</span>
        </button>
      </div>

      <div className="grid gap-6">
        {journalEntries.map((entry) => (
          <div key={entry.id} className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {entry.image && (
                <div className="md:w-1/3">
                  <img
                    src={entry.image}
                    alt={`Sunset at ${entry.location}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 md:w-2/3">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-orange-200">{entry.date}</span>
                  <span className="text-orange-200">•</span>
                  <span className="text-orange-200">{entry.location}</span>
                </div>
                <p className="text-white mb-4">{entry.reflection}</p>
                <div className="flex items-center space-x-4 text-orange-300">
                  <div className="flex items-center space-x-2">
                    <Sun className="h-5 w-5" />
                    <span>{entry.weather}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Cloud className="h-5 w-5" />
                    <span>{entry.mood}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SunsetJournal;