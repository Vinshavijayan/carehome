"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getRequest } from "@/api";
import { BookUser } from "lucide-react";
import Link from "next/link";

interface Website {
  pic: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  url: string;
}

const Website = () => {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await getRequest(`/get_explorewebsites_api`);
        console.log(res.data);
        setWebsites(res.data);
      } catch (err) {
        console.error("Failed to fetch websites:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWebsites();
  }, []);

  if (loading) {
    return (
      <div className="py-10 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10 text-center text-red-500">
        Failed to load websites. Please try again later.
      </div>
    );
  }

  if (websites.length === 0) {
    return (
      <div className="py-10 text-center">
        No websites available at the moment.
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="relative w-full isolate overflow-hidden">
        {/* Background image isolated */}
        <div className="pointer-events-none absolute inset-0 z-[-10]">
          <Image
            src="/images/Group 123.png"
            alt="Elderly care background"
            fill
            className="object-cover grayscale-[35%] !transition-none !transform-none"
            quality={80}
            priority
            sizes="100vw"
          />
        </div>

        <div className="container mx-auto w-full max-w-5xl py-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight py-4 text-center">
              <span className="text-primary">Explore Our</span>{" "}
              <span className="text-secondary">Websites</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-6">
            {websites.map((website, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-full max-w-sm mx-auto group focus-within:h-120"
              >
                {/* Card */}
                <div className="relative w-full h-90 rounded-lg overflow-hidden shadow-xl group transition-transform duration-500 ease-in-out hover:scale-105">
                  {" "}
                  {/* Background image */}
                  <Image
                    src={website.pic || "/images/default-website.jpg"}
                    alt={website.name}
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black opacity-20 z-10" />
                  <div className="absolute inset-0 flex items-end justify-center pb-4 z-20 transition-all duration-300 ease-in-out group-hover:items-center group-hover:pt-4 group-hover:pb-38">
                    <span className="text-white text-2xl md:text-3xl font-semibold text-center bg-opacity-50 px-4 py-6 rounded">
                      {website?.name}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-[55%] bg-white bg-opacity-90 translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 transition-all duration-300 ease-in-out flex flex-col items-center justify-center z-30 px-4">
                    <div className="flex flex-col items-center text-center px-2">
                      <div className="bg-blue-100 p-3 rounded-full shadow-md">
                        <svg
                          className="w-10 h-10 text-secondary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <BookUser />
                        </svg>
                      </div>
                      <p className="text-sm leading-relaxed mt-2 break-words whitespace-pre-line">
                        {website?.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button */}

                <button className="w-full bg-white text-secondary hover:bg-primary hover:text-white rounded-b-lg font-bold text-lg sm:text-xl transition shadow-xl p-3 mt-2">
                  <Link href={website?.url}>View Website</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
