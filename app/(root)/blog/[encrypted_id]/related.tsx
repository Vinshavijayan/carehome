'use client';
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRequest } from "@/api";
import { useRouter } from "next/navigation";

interface Blog {
  encrypted_id:string;
  pic: string;
  name: string;
  category: string; 
  discription: string; 
  date: Date;
}

interface SingleBlogProps {
  encrypted_id: string;
}

  const RelatedSec = ({ encrypted_id }: SingleBlogProps) => {

    const [blogs, setBlogs] = useState<Blog[]>([]);
const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const fetchReview = async () => {
        try {
          setLoading(true);
          setError(false);
          const res = await getRequest(`/get_blog_api`);
          console.log(res.data)
          setBlogs(res.data);
        } catch (err) {
          console.error("Failed to fetch blogs:", err);
          setError(true);
        } finally {
          setLoading(false);
        }
      };
  
      fetchReview();
    }, []);

        const handleCardClick = (encrypted_id: string) => {
    if (!encrypted_id) {
      console.error('Invalid blog post ID:', encrypted_id);
      return;
    }
    router.push(`/blog/${encrypted_id}`);
  };

      const blogPosts = [
    {
      id: 1,
      image: "/images/blog/image-1.jpg",
      category1: "Technology",
      category2: "june 5,2025",
      title: "The Future of AI in Everyday Life",
      excerpt:
        "Exploring how artificial intelligence will transform our daily routines and work environments in the coming years.",
      readMore: "Read more",
    },
    {
      id: 2,
      image: "/images/blog/image-3.jpg",
      category1: "Design",
      category2: "june 5,2025",
      title: "Minimalist Design Principles for 2023",
      excerpt:
        "Discover the key principles of minimalist design that will dominate the creative industry this year.",
      readMore: "Read more",
    },
    {
      id: 3,
      image: "/images/blog/image-2.jpg",
      category1: "Business",
      category2: "june 5,2025",
      title: "Scaling Your Startup Efficiently",
      excerpt:
        "Practical tips for growing your startup without compromising quality or company culture.",
      readMore: "Read more",
    },

  ];
  return (
   <div className="container mx-auto px-14 py-6">
    <h1 className='text-3xl font-semibold py-4 pb-8'>Related Articles</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.slice(0,3).map((post,index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                onClick={() => handleCardClick(post.encrypted_id)}
              >
                  <Link href="/singleblog">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.pic}
                    alt={post.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full"
                  />
                </div>
                </Link>
                <div className="p-4">
                  <div className="flex gap-4 text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-gray-500 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="mt-1">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <Link href="/singleblog">
                  <h3 className="text-xl font-semibold mb-2">{post.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.discription}</p>
                  </Link>
                  <div className="flex justify-end items-center">
                    <Link href="/singleblog">
                      <span className="text-secondary mr-2">
                        Read More
                      </span>
                    </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href='/blog'>
        <button className="text-secondary font-bold text-2xl underline underline-offset-4 hover:text-secondary-dark transition-colors duration-300">
          View All
        </button>
        </Link>
      </div>
    </div>
  )
}

export default RelatedSec