import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Sunset Chaser Tee',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: 'Golden Hour Hoodie',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: 'Sunset Vibes Cap',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b',
    rating: 4.7,
    reviews: 56
  }
];

const Shop = () => {
  return (
    <div className="py-8">
      <div className="flex items-center space-x-2 mb-8">
        <ShoppingBag className="h-8 w-8 text-orange-400" />
        <h1 className="text-3xl font-bold text-orange-100">Sunset Shop</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-orange-200 ml-1">{product.rating}</span>
                </div>
                <span className="text-orange-200">({product.reviews} reviews)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">${product.price}</span>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;