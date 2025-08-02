'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRequest } from "@/api";

interface Blog {
  encrypted_id: string;
  pic: string;
  name: string;
  category: string; 
  discription: string; 
  date: string; // Changed from Date to string since API usually returns string
}

interface SingleBlogProps {
  encrypted_id: string;
}

const MainSec = ({ encrypted_id }: SingleBlogProps) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await getRequest(`/get_blogDetails_api?encrypted_id=${encrypted_id}`);
        
        if (!res.data || !res.data[0]) {
          throw new Error('Blog data not found');
        }
        
        setBlog(res.data[0]);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setError(err instanceof Error ? err.message : 'Failed to load blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [encrypted_id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
          <Link href="/blog" className="mt-2 inline-block text-blue-500 hover:text-blue-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">No blog found</strong>
          <Link href="/blog" className="mt-2 inline-block text-blue-500 hover:text-blue-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div>
        <Link href='/blog'>
          <span className='font-bold text-xl px-2'>← </span>Back to Blog
        </Link>
      </div>

      {/* Blog content section */}
      <div className="bg-white shadow-lg rounded-xl p-6 mt-6">
        {/* Category and date row */}
        <div className="flex items-center gap-6 mb-4">
          <span className="bg-[#D4E7FD] text-black px-3 py-2 rounded-md text-sm font-light">
            {blog.category}
          </span>
          <span className="text-gray-500 text-sm">
            Published : {blog.date}
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-3xl font-bold mb-4 pt-4">{blog.name}</h1>
        
        {/* First paragraph */}
        <p className="text-gray-700 font-light mb-6">
          {blog.discription}
        </p>

       
      </div>
    </div>
  );
}

export default MainSec;