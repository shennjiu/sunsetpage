import React from 'react';
import { Camera, MapPin, Users } from 'lucide-react';

const ExploreSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-orange-100 mb-8">Explore More</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-colors cursor-pointer">
          <Camera className="h-8 w-8 text-orange-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Photography Tips</h3>
          <p className="text-orange-200">Learn how to capture the perfect sunset shot from our community experts.</p>
        </div>

        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-colors cursor-pointer">
          <MapPin className="h-8 w-8 text-orange-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Best Locations</h3>
          <p className="text-orange-200">Discover top-rated sunset viewing spots around the world.</p>
        </div>

        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-colors cursor-pointer">
          <Users className="h-8 w-8 text-orange-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Join Challenges</h3>
          <p className="text-orange-200">Participate in our weekly sunset photography challenges.</p>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;