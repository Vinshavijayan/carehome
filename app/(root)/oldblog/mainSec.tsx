'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const MainSec = () => {
  // Sample images for the swiper - replace with your actual images
  const images = [
    '/images/blog/image.jpg',
    '/images/gallery2.png',
    '/images/gallery3.png',
    '/images/gallery4.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 lg:mt-1">
      {/* Headline with full-width underline */}
      <div className="w-full pb-2 border-b-2 border-gray-300 mb-8 py-10">
        <h1 className="text-3xl font-bold text-left">Featured Article</h1>
      </div>

      {/* Image swiper section */}
      <div className="relative w-full h-96 md:h-[400px] mb-8 rounded-2xl overflow-hidden">
        {/* Current Image */}
        <Image
          src={images[currentImageIndex]}
          alt={`Swiper Image ${currentImageIndex + 1}`}
          layout="fill"
          objectFit="cover"
          priority
        />

        {/* Content overlay - aligned to left bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 md:p-6 lg:p-8 text-white">
          <div className="w-full max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-left">10 Simple Exercises for Seniors to Stay Active at Home</h2>
            <p className="text-md max-w-4xl text-left mb-4 md:mb-6">
           Discover easy-to-follow routines that can help maintain mobility and strength without special equipment.
            </p>
            
            {/* Date and time with icons */}
          <div className="flex pt-4 items-center gap-4 text-sm md:text-base">
  <div className="flex items-center gap-2">
    <FaCalendarAlt className="text-white/80" />
    <span className='text-sm'>{new Date(2023, 5, 12).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
  </div>
  <div className="flex items-center gap-2">
    <FaClock className="text-white/80" />
    <span className='text-sm'>5 mins</span>
  </div>
</div>


          </div>
        </div>

        {/* Swiper dots - centered at bottom */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-white' : 'bg-gray-400 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSec;