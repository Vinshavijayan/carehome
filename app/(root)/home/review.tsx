'use client';
import React, { useEffect, useState } from "react";
import { getRequest } from "@/api";

interface Review {
  pic: string;
  name: string;
  designation: string; 
  rateing: string; 
  comment: string;
}

const review = () => {
  const [review, setReview] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await getRequest(`/get_testimonial_api`);
        setReview(res.data);
      } catch (err) {
        console.error("Failed to fetch review:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= review.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(review.length - 3, 0) : prevIndex - 1
    );
  };

  if (loading) return <div className="w-full text-center py-4">Loading Reviews...</div>;
  if (error) return <div className="w-full text-center py-4 text-red-500">Failed to load Reviews</div>;
  if (review.length === 0) return <div className="w-full text-center py-4">No Reviews available</div>;

  // Get the current 3 reviews to display
  const visibleReviews = review.slice(currentIndex, currentIndex + 3);
  // If we're at the end and need to loop around
  const needsLoop = currentIndex + 3 > review.length;
  const loopedReviews = needsLoop 
    ? [...visibleReviews, ...review.slice(0, 3 - (review.length - currentIndex))]
    : visibleReviews;

  return (
    <div className="relative w-full py-12 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight text-center">
          <span className="text-primary">What</span>{" "}
          <span className="text-secondary">Families</span>{" "}
          <span className="text-primary">Say</span>
        </h2>
        
        {/* White background container for all cards */}
        <div className="relative bg-white p-8 rounded-xl shadow-lg">
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-50"
          >
            <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-50"
          >
            <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(needsLoop ? loopedReviews : visibleReviews).map((item, index) => (
              <div key={`${currentIndex}-${index}`} className="p-8 flex flex-col bg-gray-100 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => {
                    const ratingValue = parseInt(item.rateing) || 0;
                    return (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < ratingValue ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    );
                  })}
                </div>
                <p className="text-gray-600 mb-6 flex-grow italic">
                  "{item.comment}"
                </p>
                <div className="flex items-start">
                  <img 
                    src={item.pic} 
                    alt="Reviewer" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <span className="font-bold text-[#273FA8] block">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.designation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default review;