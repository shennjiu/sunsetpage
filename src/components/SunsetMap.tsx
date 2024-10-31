import React from 'react';
import { MapPin, Navigation, Users } from 'lucide-react';

const nearbySpots = [
  {
    id: 1,
    location: 'Santa Monica Pier',
    distance: '0.5 miles',
    rating: 4.8,
    viewers: 12
  },
  {
    id: 2,
    location: 'Palisades Park',
    distance: '1.2 miles',
    rating: 4.6,
    viewers: 8
  }
];

const SunsetMap = () => {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-orange-100">Nearby Sunset Spots</h2>
        <button className="flex items-center space-x-2 text-orange-400 hover:text-orange-300">
          <Navigation className="h-5 w-5" />
          <span>Find my location</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Popular Spots Near You</h3>
            <div className="space-y-4">
              {nearbySpots.map((spot) => (
                <div key={spot.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-orange-400" />
                    <div>
                      <p className="text-white font-medium">{spot.location}</p>
                      <p className="text-orange-200 text-sm">{spot.distance}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-orange-300" />
                      <span className="text-orange-300">{spot.viewers}</span>
                    </div>
                    <span className="text-white font-medium">{spot.rating}★</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
          <div className="aspect-square rounded-lg bg-orange-950/50 flex items-center justify-center">
            <p className="text-orange-300">Map view coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SunsetMap;