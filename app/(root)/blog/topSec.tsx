'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import MainSec from './mainSec'
import BlogsSec from './blogs'
import { getRequest, postRequest } from "@/api";

interface Blog {
  encrypted_id: string;
  pic: string;
  name: string;
  category: string; 
  discription: string; 
  date: Date;
}

interface Contact {
  logo: string;
  name: string;
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

const TopSec = () => {
  const [blogs, setBlogs] = useState<Blog | null>(null);
   const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await getRequest('/get_blog_api');
        console.log(res.data);
        setBlogs(res.data);
        setSearchResults(res.data); // Initialize search results with all blogs
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const fetchContact = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await getRequest('/get_contact_api');
        console.log(res.data);
        setContact(res.data);
      } catch (err) {
        console.error("Failed to fetch contact:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
    fetchContact();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await getRequest(`/get_blog_api?search=${searchTerm}`);
      setSearchResults(res.data);
    } catch (err) {
      console.error("Failed to search blogs:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] flex items-start justify-center text-center pt-16 md:pt-14 bg-[#E7EEF2]">
        <div className="relative z-10 max-w-8xl px-8 md:px-16 mt-8 md:mt-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-white">
            <span className='text-secondary'>{contact?.name} </span>  <span className="text-black">Insights & Resources</span>{" "}
          </h1>

          <p className="text-lg md:text-xl mb-8 text-primary opacity-90 leading-relaxed max-w-5xl">
            Discover helpful articles, expert advice, and heartwarming stories about senior care and living.
          </p>
          
          {/* Search option */}
          <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full py-4 px-6 pr-12 rounded-full bg-white shadow-2xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-lg md:text-xl placeholder:text-lg md:placeholder:text-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="absolute right-6 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <MainSec />
      <BlogsSec blogs={searchResults} loading={loading} error={error} />

      <div className='p-4 lg:p-10'></div>
    </div>
  )
}

export default TopSec