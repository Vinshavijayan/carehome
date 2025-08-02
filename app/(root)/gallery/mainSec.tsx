"use client";
import React, { useEffect, useState } from "react";
import { getRequest } from "@/api";
import Image from "next/image";

interface Gallery {
  id: number;
  name: string;
  date: string;
  pic: string;
  category: string;
}

type ImageType = {
  id: number;
  name: string;
  date: string;
  pic: string;
  category: string;
};

type ImageCategory = "all" | "activities" | "fascilities" | "events";

type ImageCollection = {
  [key in ImageCategory]: ImageType[];
};

const MainSec = () => {
  const [images, setImages] = useState<ImageCollection>({
    all: [],
    activities: [],
    fascilities: [],
    events: [],
  });
  const [activeCategory, setActiveCategory] = useState<ImageCategory>("all");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await getRequest(`/get_gallery_api`);
        
        const apiImages: ImageType[] = res.data.map((item: Gallery) => ({
          id: item.id,
          name: item.name,
          date: item.date,
          pic: item.pic,
          category: item.category.toLowerCase()
        }));

        const categorizedImages: ImageCollection = {
          all: apiImages,
          activities: apiImages.filter(img => img.category === "activities"),
          fascilities: apiImages.filter(img => img.category === "fascilities"),
          events: apiImages.filter(img => img.category === "events"),
        };

        setImages(categorizedImages);
      } catch (err) {
        console.error("Failed to fetch gallery:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) return <div className="w-full text-center py-4">Loading Gallery...</div>;
  if (error) return <div className="w-full text-center py-4 text-red-500">Failed to load Gallery</div>;

  const handleCategoryChange = (category: ImageCategory) => {
    setActiveCategory(category);
    setHoveredCard(null);
  };

  // Create a unique identifier for each card
  const getCardId = (image: ImageType, index: number) => {
    return `${activeCategory}-${image.id}-${index}`;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 md:mb-12">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`px-4 py-1 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base ${
            activeCategory === "all" ? "bg-[#D0E3F9]" : "bg-[#E7E7E7]"
          } text-black hover:bg-[#D0E3F9] transition-colors`}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryChange("activities")}
          className={`px-4 py-1 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base ${
            activeCategory === "activities" ? "bg-[#D0E3F9]" : "bg-[#E7E7E7]"
          } text-black hover:bg-[#D0E3F9] transition-colors`}
        >
          Activities
        </button>
        <button
          onClick={() => handleCategoryChange("fascilities")}
          className={`px-4 py-1 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base ${
            activeCategory === "fascilities" ? "bg-[#D0E3F9]" : "bg-[#E7E7E7]"
          } text-black hover:bg-[#D0E3F9] transition-colors`}
        >
          Fascilities
        </button>
        <button
          onClick={() => handleCategoryChange("events")}
          className={`px-4 py-1 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base ${
            activeCategory === "events" ? "bg-[#D0E3F9]" : "bg-[#E7E7E7]"
          } text-black hover:bg-[#D0E3F9] transition-colors`}
        >
          Events
        </button>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images[activeCategory].map((image, index) => {
          const cardId = getCardId(image, index);
          return (
            <div
              key={cardId}
              className="relative rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
              onMouseEnter={() => setHoveredCard(cardId)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Image
                src={image.pic}
                alt={image.name}
                width={300}
                height={300}
                className={`w-full h-64 object-cover transition-filter duration-300 ${
                  hoveredCard === cardId ? "brightness-60" : ""
                }`}
              />
              {hoveredCard === cardId && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">{image.name}</h3>
                  <p className="text-white text-sm">{image.date}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Empty state */}
      {images[activeCategory].length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No images found in this category</p>
        </div>
      )}
    </div>
  );
};

export default MainSec;