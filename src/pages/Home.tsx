import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import SunsetGallery from '../components/SunsetGallery';
import ExploreSection from '../components/ExploreSection';
import SunsetMap from '../components/SunsetMap';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-200 via-pink-300 to-orange-100 text-transparent bg-clip-text mb-4">
          Capture the Magic of Sunset
        </h1>
        <p className="text-orange-100 text-xl mb-8">
          Join the community of sunset lovers and share your perfect moments
        </p>
        <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg">
          Start Sharing
        </button>
      </div>

      <FeaturedPost />
      <SunsetGallery />
      <SunsetMap />
      <ExploreSection />
    </>
  );
};

export default Home;