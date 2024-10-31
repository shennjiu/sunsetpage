import React from 'react';
import { MapPin, Heart, MessageCircle, Share2 } from 'lucide-react';

const FeaturedPost = () => {
  return (
    <div className="mb-16 bg-black/30 rounded-xl overflow-hidden backdrop-blur-sm">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="Sunset of the Day"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
          <div className="flex items-center space-x-2 text-orange-200 mb-2">
            <MapPin className="h-5 w-5" />
            <span>Malibu, California</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Sunset of the Day</h2>
          <p className="text-orange-100 mb-4">
            A breathtaking coastal sunset captured by @sunsetlover
          </p>
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-white">
              <Heart className="h-6 w-6" />
              <span>2.4k</span>
            </button>
            <button className="flex items-center space-x-2 text-white">
              <MessageCircle className="h-6 w-6" />
              <span>128</span>
            </button>
            <button className="flex items-center space-x-2 text-white">
              <Share2 className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;