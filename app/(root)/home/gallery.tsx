'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState,Suspense } from "react";
import { getRequest } from "@/api";

interface Gallery {
  pic: string;
  category: string;
  date: string; 

}

const Gallery = () => {


          const [gallery, setGallery] = useState<Gallery[]>([]);
          const [loading, setLoading] = useState(true);
          const [error, setError] = useState(false);
          const [activeIndex, setActiveIndex] = useState<number | null>(null);
      
          useEffect(() => {
              const fetchReview = async () => {
                  try {
                      setLoading(true);
                      setError(false);
                      const res = await getRequest(`/get_gallery_api`);
                      console.log(res.data)
                      setGallery(res.data);
              
                  } catch (err) {
                      console.error("Failed to fetch gallery:", err);
                      setError(true);
                  } finally {
                      setLoading(false);
                  }
              };
      
              fetchReview();
          }, []);
      
        
          if (loading) return <div className="w-full text-center py-4">Loading Gallery...</div>;
          if (error) return <div className="w-full text-center py-4 text-red-500">Failed to load Gallery</div>;
          // if (review.length === 0) return <div className="w-full text-center py-4">No Reviews available</div>;
      
      

  return (
    <Suspense>
    <div>

<div className='container px-4 py-12 md:p-1 md:px-4'>
<div className="">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 leading-tight pt-10 text-center">
            <span className="text-primary">Take a Look Through </span>
            <span className="text-secondary">Our Gallery</span>
          </h2>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.slice(0,6).map((item, index) => (
  <div
    key={index}
    className="relative w-full h-64 rounded-lg overflow-hidden shadow-md group"
  >
    <Image
      src={item.pic}  
      alt={`Gallery image ${index + 1}`}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
      priority={index < 2}
    />
    <div className="absolute inset-0 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
  </div>
))}
          </div>

          {/* View All Link */}
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block text-2xl text-secondary font-semibold underline hover:text-primary transition p-10"
            >
              View All
            </Link>
          </div>
        </div>

        </div>
    </div>
    </Suspense>
  )
}

export default Gallery