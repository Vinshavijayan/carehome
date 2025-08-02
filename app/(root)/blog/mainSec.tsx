'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';
import { getRequest } from "@/api";

interface Blog {
  pic: string;
  name: string;
  subhead: string;
  date: string; // Changed from Date to string since API usually returns string
}

const MainSec = () => {
  const [blogs, setBlogs] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await getRequest(`/get_article_api`);
        console.log(res.data);
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch contact:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading article</div>;
  if (!blogs) return <div>No article found</div>;

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
          src={blogs.pic}
          alt={blogs.name}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />

        {/* Content overlay - aligned to left bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 md:p-6 lg:p-8 text-white">
          <div className="w-full max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-left">{blogs.name}</h2>
            <p className="text-md max-w-4xl text-left mb-4 md:mb-6">
              {blogs.subhead}
            </p>
            
            {/* Date and time with icons */}
            <div className="flex pt-4 items-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-white/80" />
                <span className='text-sm'>
                  {new Date(blogs.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSec;