"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
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

interface Services {
  pic: string;
  name: string;
  discription: string;
}

export default function smFooter() {
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState<Services[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        setLoading(true);
        const res = await getRequest(`/get_contact_api`);
        console.log(res.data);
        setContact(res.data);
      } catch (err) {
        console.error("Failed to fetch contact:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await getRequest(`/get_services_api`);
        console.log(res.data);
        setServices(res.data);
      } catch (err) {
        console.error("Failed to fetch services:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
    fetchReview();
  }, []);

  return (
    <footer className="bg-primary text-white text-[16px] font-[400] font-inter py-8 px-4 sm:hidden">
      <div className="mx-auto flex flex-col gap-8 text-center">
        {/* Logo with text */}
        <div className="flex flex-col items-center">
          <div className="mb-4 rounded-full overflow-hidden">
            <Link href={'/home'}>
              {loading || !contact?.logo ? (
                <div className="w-20 h-20 bg-gray-300 animate-pulse rounded-full" />
              ) : (
                <Image 
                  src={contact.logo}
                  alt="Company Logo"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              )}
            </Link>
          </div>
          <p className="text-white/80 text-center">
            {contact?.description}
          </p>
        </div>

        {/* Accordion-style navigation would work well here */}
        <div className="flex flex-col gap-6 items-center">
          {/* Services Section */}
          <div className="border-b border-white/20 pb-4 w-full">
            <h3 className="text-black font-[600] mb-3 text-lg">Services</h3>
            <ul className="space-y-2">
              {loading ? (
                // Show loading skeleton while services are loading
                <>
                  <li className="h-5 w-full bg-gray-300 animate-pulse rounded mx-auto" style={{ maxWidth: '200px' }}></li>
                  <li className="h-5 w-full bg-gray-300 animate-pulse rounded mx-auto" style={{ maxWidth: '200px' }}></li>
                  <li className="h-5 w-full bg-gray-300 animate-pulse rounded mx-auto" style={{ maxWidth: '200px' }}></li>
                  <li className="h-5 w-full bg-gray-300 animate-pulse rounded mx-auto" style={{ maxWidth: '200px' }}></li>
                </>
              ) : error ? (
                // Show error message if services failed to load
                <li className="text-white/80">Failed to load services</li>
              ) : services.length > 0 ? (
                // Render actual services when loaded
                services.map((service, index) => (
                  <li key={index}>
                    <Link
                    href={`/services#service-${index}`}
                      className="text-white/80 hover:text-white transition"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))
              ) : (
                // Show message if no services are available
                <li className="text-white/80">No services available</li>
              )}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="border-b border-white/20 pb-4 w-full">
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white transition">Home</Link></li>
              <li><Link href="/about-us" className="text-white/80 hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-white transition">Services</Link></li>
              <li><Link href="/blog" className="text-white/80 hover:text-white transition">Newsletter</Link></li>
              <li><Link href="/gallery" className="text-white/80 hover:text-white transition">Gallery</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full">
            <h3 className="text-black font-[600] mb-3 text-lg">Contact Us</h3>
            <ul className="space-y-3 items-center flex flex-col">
              <li className="flex items-center flex-col">
                <span className="bg-white rounded-full p-1 mb-2 flex-shrink-0">
                  <svg className="w-4 h-4 mt-0.5" fill="none" stroke="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-white/80">{contact?.address}</span>
              </li>
              <li className="flex items-center flex-col">
                <span className="bg-white rounded-full p-1 mb-2 flex-shrink-0">
                  <svg className="w-4 h-4 mt-0.5" fill="none" stroke="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="text-white/80">Phone: {contact?.MainLine}</span>
              </li>
              <li className="flex items-center flex-col">
                <span className="bg-white rounded-full p-1 mb-2 flex-shrink-0">
                  <svg className="w-4 h-4 mt-0.5" fill="none" stroke="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="text-white/80">{contact?.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}