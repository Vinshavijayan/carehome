"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getRequest } from "@/api";

interface Contact {
  logo: string;
  address: string;
  email: string;
  MainLine: string;
  admissions: string;
  fax: string;
  map: string;
  our_worktime: string;
  description: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
}

const Location = () => {
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        setLoading(true);
        // setError(false);
        const res = await getRequest(`/get_contact_api`);
        console.log(res.data);
        setContact(res.data);
      } catch (err) {
        console.error("Failed to fetch contact:", err);
        // setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, []);
  return (
    <div>
      <div className="container mx-auto px-4 md:mt-10 py-10">
        <div className="flex items-center justify-start gap-2">
          <div className="text-secondary py-1 rounded-full">
            <Image
              src="/images/icons/location.png"
              alt="Location icon"
              width={20}
              height={20}
              className="h-8 w-8"
            />
          </div>
          <div>
            <h3 className="font-semibold text-3xl">Our Location</h3>
          </div>
        </div>

        {/* Full-width Google Maps container */}
        <div className="w-full mt-8">
          <div className="aspect-w-16 aspect-h-9 w-full h-86 md:h-[400px]">
            <iframe
              src={contact?.map}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
