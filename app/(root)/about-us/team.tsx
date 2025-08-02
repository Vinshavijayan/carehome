'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState,Suspense } from "react";
import { getRequest } from "@/api";

interface Team {
  id: string;
  pic: string;
  name: string;
  designation: string; 
  description: string; 
}

const TeamSec = () => {


          const [team, setTeam] = useState<Team[]>([]);
          const [loading, setLoading] = useState(true);
          const [error, setError] = useState(false);
          const [activeIndex, setActiveIndex] = useState<number | null>(null);
      
          useEffect(() => {
              const fetchReview = async () => {
                  try {
                      setLoading(true);
                      setError(false);
                      const res = await getRequest(`/get_ourteam_api`);
                      console.log(res.data)
                      setTeam(res.data);
              
                  } catch (err) {
                      console.error("Failed to fetch team:", err);
                      setError(true);
                  } finally {
                      setLoading(false);
                  }
              };
      
              fetchReview();
          }, []);
      
        
          if (loading) return <div className="w-full text-center py-4">Loading Team...</div>;
          if (error) return <div className="w-full text-center py-4 text-red-500">Failed to load Team</div>;
      


  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Medical Director",
      description:
        "With 15 years in geriatric medicine, Dr. Johnson leads our clinical team with expertise and compassion.",
      image: "/images/team/image.jpg",
    },
    {
      id: 2,
      name: "Lisa Chen",
      role: "Head of Care",
      description:
        "Lisa brings 10 years of dementia care experience and manages our care staff with warmth and professionalism.",
      image: "/images/team/image-2.jpg",
    },
    {
      id: 3,
      name: "Mr Steve Issac ",
      role: "Medical Director",
      description:
        "Steve creates engaging daily activities that stimulate both mind and body for all residents.",
      image: "/images/team/image-1.jpg",
    },
    {
      id: 4,
      name: "Jacob Thomas",
      role: "Head Chef",
      description:
        "Jacob prepares nutritious, delicious meals tailored to individual dietary needs and preferences.",
      image: "/images/team/image-3.jpg",
    },
  ];

  return (
    <div className=" bg-white rounded-xl mx-auto max-w-7xl py-6">
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Heading with underline */}
          <div className="text-center mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                <span className="text-secondary">Meet</span>{" "}
                <span className="text-primary">Our Team</span>
              </h2>
              <div
                className="w-[20%] h-2 mx-auto mb-6"
                style={{
                  background:
                    "linear-gradient(to right, #2f899f 30%, #1a4ca8 30%)",
                }}
              ></div>
              <p className="text-lg text-primary max-w-3xl mx-auto">
                Our dedicated team of care professionals brings expertise,
                warmth and continuity to our residents' lives.
              </p>
            </div>
          </div>

          {/* Team cards grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* {teamMembers.map((member) => ( */}
                {team.slice(0,4).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-1 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={item.pic}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                    placeholder="blur"
                    blurDataURL="/placeholder-team.jpg"
                  />
                </div>

                {/* Text content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-secondary text-md lg:text-md mt-1">
                    {item.designation}
                  </p>
                  <p className="mt-3 text-gray-500 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSec;
