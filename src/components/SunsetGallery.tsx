import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const sunsetPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869',
    likes: '1.2k',
    comments: '64',
    location: 'Santorini, Greece'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1506815444479-bfdb1e96c566',
    likes: '956',
    comments: '42',
    location: 'Grand Canyon, USA'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1498081959737-f3ba1af08103',
    likes: '1.5k',
    comments: '89',
    location: 'Bali, Indonesia'
  }
];

const SunsetGallery = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-orange-100 mb-8">Popular Sunsets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sunsetPosts.map((post) => (
          <div key={post.id} className="group relative overflow-hidden rounded-xl">
            <img
              src={post.image}
              alt={`Sunset in ${post.location}`}
              className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-medium mb-2">{post.location}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-white">
                    <Heart className="h-5 w-5" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-white">
                    <MessageCircle className="h-5 w-5" />
                    <span>{post.comments}</span>
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

export default SunsetGallery;