import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Image, Book, ShoppingBag, Search } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-orange-400' : 'text-orange-100 hover:text-orange-400';
  };

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-orange-400" />
            <span className="text-2xl font-bold text-orange-100">SunsetShare</span>
          </Link>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search sunsets..."
                className="w-full bg-white/10 text-orange-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-orange-300" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/gallery" className={`flex flex-col items-center ${isActive('/gallery')}`}>
              <Image className="h-6 w-6" />
              <span className="text-xs">Gallery</span>
            </Link>
            <Link to="/journal" className={`flex flex-col items-center ${isActive('/journal')}`}>
              <Book className="h-6 w-6" />
              <span className="text-xs">Journal</span>
            </Link>
            <Link to="/shop" className={`flex flex-col items-center ${isActive('/shop')}`}>
              <ShoppingBag className="h-6 w-6" />
              <span className="text-xs">Shop</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;