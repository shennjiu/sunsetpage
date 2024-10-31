import React from 'react';

interface SunsetCardProps {
  image: string;
  location: string;
}

const SunsetCard: React.FC<SunsetCardProps> = ({ image, location }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl">
      <img
        src={image}
        alt={`Sunset in ${location}`}
        className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-white font-medium">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default SunsetCard;