import React from 'react'
import Image from 'next/image'

const ExpertCare = () => {
    const cardData = [
        { id: 1, text: "Medication Management" },
        {
          id: 2,
          text: "Personalized Care",
          pagaragraph:
            "Good Day Care Homes LTD enables individuals and clinicians to work together to deliver care that is realistic, sustainable and appropriate for the residents.",
        },
        { id: 3, text: "House Keeping" },
        { id: 4, text: "Food and Nutrition" },
        { id: 5, text: "Expert Team" },
      ];
  return (
    <div>



         <div className="relative w-full">
                    <div className="absolute inset-0 -z-10">
                      <Image
                        src="/images/home-bg.png"
                        alt="Elderly care background"
                        fill
                        className="object-cover grayscale-[35%]"
                        quality={80}
                        priority={true}
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-white/80"></div>
                    </div>
        
                    <div className="container mx-auto w-full max-w-5xl py-12">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight py-4 text-center">
                          <span className="text-primary">Expert Care</span>{" "}
                          <span className="text-secondary">of the Elderly</span>
                        </h2>
                      </div>
        
                      {/* First row with 3 cards */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        {cardData.slice(0, 3).map((card) => (
                          <div
                            key={card.id}
                            className="relative rounded-lg overflow-hidden shadow-lg"
                            style={{ aspectRatio: "14/8" }}
                          >
                            <Image
                              src="/images/Group 121.jpg"
                              alt={`Card ${card.id} background`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center p-4">
                              <p className="text-white text-xl font-semibold text-center">
                                {card.text}
                              </p>
                              <p className="text-white text-base font-medium text-center mt-2">
                                {card.pagaragraph}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
        
                      {/* Second row with 2 centered cards */}
                      <div className="flex flex-wrap justify-center gap-6">
                        {cardData.slice(3, 5).map((card) => (
                          <div
                            key={card.id}
                            className="relative w-full sm:w-[48%] lg:w-[400px] rounded-lg overflow-hidden shadow-lg "
                            style={{ aspectRatio: "14/8" }}
                          >
                            <Image
                              src="/images/Group 121.jpg"
                              alt={`Card ${card.id} background`}
                              fill
                              className="object-cover object-center-top"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                              <p className="text-white text-xl font-semibold text-center p-4">
                                {card.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default ExpertCare