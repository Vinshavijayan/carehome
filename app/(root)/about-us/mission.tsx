import React from "react";
import Image from "next/image";

const MissionSec = () => {
  // Icon image paths (assuming these are in your public folder)
  const iconImages = [
    "/images/about/charity.png",
    "/images/about/home.png",
    "/images/about/family.png",
  ];

  const cardData = [
    {
      title: "Compassionate Care",
      description:
        "We treat every resident with the kindness and respect we would want for our own family members.",
    },
    {
      title: "Homely Environment",
      description:
        "Our facilities are designed to feel like home, not an institution, with cozy spaces and personal touches.",
    },
    {
      title: "Family Involvement",
      description:
        "We actively encourage family participation and maintain open communication with loved ones.",
    },
  ];

  return (
    <div className="mt-14">
      <div className="relative bg-[#DDE4E7] rounded-xl mx-auto max-w-7xl py-6">
        <div className="container px-4 py-4 md:p-1 md:px-4">
          <div className="py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Headline with underline */}
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                  <span className="text-primary">Our </span>
                  <span className="text-secondary">Mission & Values</span>
                </h2>
                <div
                  className="w-[20%] h-2 mx-auto mb-6"
                  style={{
                    background:
                      "linear-gradient(to right, #1a4ca8 70%, #2f899f 70%)",
                  }}
                ></div>
                <p className="text-lg text-primary max-w-3xl mx-auto">
                  At Serenity Care, we're guided by principles that ensure
                  dignity, respect and quality of life for every resident.
                </p>
              </div>

              {/* Cards container */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
                  >
                    {/* Icon */}
                    <div className="mb-6 relative w-12 h-12">
                      <Image
                        src={iconImages[index]}
                        alt={card.title}
                        width={48}
                        height={48}
                        className="text-blue-600"
                      />
                    </div>
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {card.title}
                    </h3>
                    {/* Description */}
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSec;