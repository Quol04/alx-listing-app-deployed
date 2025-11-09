import React, { useState } from 'react';
import Image from 'next/image';

import { PropertyProps } from '@/interfaces/index';

const Card: React.FC<PropertyProps> = ({ 
  name, 
  address, 
  rating, 
  category, 
  price, 
  offers, 
  image, 
  discount 
}) => {
  // Ensure rating is within valid range
  const displayRating = Math.max(0, Math.min(5, rating || 0));
  
  const [imgSrc, setImgSrc] = useState(image || '/assets/hero_image.png');

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto">
      <div className="relative">
        <Image
          src={imgSrc}
          alt={name || 'Property image'}
          width={768}
          height={192}
          className="w-full h-48 object-cover"
          unoptimized
          onError={() => setImgSrc('/file.svg')}
        />
        {discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            {discount}
          </span>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
          {name || 'Unnamed Property'}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          📍 {address?.city || 'Unknown'}, {address?.state || 'Unknown'}, {address?.country || 'Unknown'}
        </p>
        <div className="flex items-center mb-2">
          <span className="text-gray-700 dark:text-gray-300 mr-2">Rating: {displayRating}/5</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`text-lg ${i < displayRating ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-2">
          🏷️ Category: {category?.length ? category.join(", ") : 'Not specified'}
        </p>
        <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
          ${price?.toLocaleString() || 'Contact for price'}
        </p>
        {offers && (
          <div className="border-t pt-3">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Amenities:</h4>
            <div className="grid grid-cols-1 gap-1 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <span className="mr-2">🛏️</span>
                <span>Beds: {offers.bed || 'Not specified'}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🚿</span>
                <span>Showers: {offers.shower || 'Not specified'}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">👥</span>
                <span>Occupants: {offers.occupants || 'Not specified'}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;