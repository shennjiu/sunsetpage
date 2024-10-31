import React, { useState } from 'react';
import { Book, Plus, Calendar, MapPin, Cloud, Edit2 } from 'lucide-react';
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

const Journal = () => {
  const [isAddingEntry, setIsAddingEntry] = useState(false);

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <Book className="h-8 w-8 text-orange-400" />
          <h1 className="text-3xl font-bold text-orange-100">Sunset Journal</h1>
        </div>
        <button
          onClick={() => setIsAddingEntry(true)}
          className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>New Entry</span>
        </button>
      </div>

      {isAddingEntry && (
        <div className="mb-8 bg-black/30 backdrop-blur-sm rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">New Journal Entry</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-orange-200 mb-2">Date</label>
                <input
                  type="date"
                  className="w-full bg-black/30 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-orange-200 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="Where did you watch the sunset?"
                  className="w-full bg-black/30 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-orange-200 mb-2">Reflection</label>
              <textarea
                placeholder="Share your thoughts about this sunset..."
                className="w-full bg-black/30 text-white rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsAddingEntry(false)}
                className="px-4 py-2 text-orange-200 hover:text-orange-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                Save Entry
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-6">
        {journalEntries.map(entry => (
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
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-orange-200">
                      <Calendar className="h-5 w-5" />
                      <span>{entry.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-orange-200">
                      <MapPin className="h-5 w-5" />
                      <span>{entry.location}</span>
                    </div>
                  </div>
                  <button className="text-orange-400 hover:text-orange-300">
                    <Edit2 className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-white mb-4">{entry.reflection}</p>
                <div className="flex items-center space-x-4 text-orange-300">
                  <div className="flex items-center space-x-2">
                    <Cloud className="h-5 w-5" />
                    <span>{entry.weather}</span>
                  </div>
                  {entry.mood && (
                    <div className="flex items-center space-x-2">
                      <span>•</span>
                      <span>{entry.mood}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;