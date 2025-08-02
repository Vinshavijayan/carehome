'use client';
import Image from 'next/image';
import Link from 'next/link';
import React,{useState,useEffect} from "react";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import { getRequest,postRequest } from "@/api";

interface Blog {
  encrypted_id: string;
  pic: string;
  name: string;
  category: string; 
  discription: string; 
  date: Date;
}

interface PopularBlog {
  encrypted_id: string;
  pic: string;
  name: string;
  category: string; 
  discription: string; 
  date: Date;
}

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

interface BlogsSecProps {
  blogs: Blog[];
  loading: boolean;
  error: boolean;
}

const BlogsSec = ({ blogs, loading, error }: BlogsSecProps) => {
  const [popularBlogs, setPopularBlogs] = useState<PopularBlog[]>([]);
  const [contact, setContact] = useState<Contact | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
  });

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await getRequest(`/get_contact_api`);
        console.log(res.data);
        setContact(res.data);
      } catch (err) {
        console.error("Failed to fetch contact:", err);
      }
    };

    const fetchPopularBlogs = async () => {
      try {
        const res = await getRequest(`/get_popularBlogs_api`);
        console.log(res.data)
        setPopularBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch popular blogs:", err);
      }
    };

    fetchContact();
    fetchPopularBlogs();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const data = {
        ...formData,
      };
      console.log(data);
      const url = "/newsletterSubscribe"; 
      const res: any = await postRequest({
        url,
        data,
      });
      
      console.log(res);
      if (res?.error) {
        toast.error(
          res?.message || "Failed to submit the enquiry. Please try again."
        );
        return;
      }
      setShowPopup(true);
      toast.success("Subscribed successfully!");
      setFormData({
        email: '',
      });
    } catch (error) {
      console.error("Subscription error", error);
      toast.error("Failed to subscribe. Please try again.");
    } 
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleCardClick = (encrypted_id: string) => {
    if (!encrypted_id) {
      console.error('Invalid blog post ID:', encrypted_id);
      return;
    }
    router.push(`/blog/${encrypted_id}`);
  };

  if (loading) return <div className="w-full text-center py-4">Loading Blogs...</div>;
  if (error) return <div className="w-full text-center py-4 text-red-500">Failed to load Blogs</div>;
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Thank You for Subscribing!</h3>
              <button 
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="mb-4">
              You've been successfully subscribed to our newsletter. 
              Look forward to receiving the latest caregiving tips and senior living resources in your inbox.
            </p>
            <button
              onClick={closePopup}
              className="w-full bg-primary text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left section - 60% */}
        <div className="w-full lg:w-3/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.slice(0,4).map((post,index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                onClick={() => handleCardClick(post.encrypted_id)}
              >
                <Link href='/singleblog'>
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
                  <Link href='/singleblog'>
                  <h3 className="text-xl font-semibold mb-2">{post.name}</h3>
                 <p className="text-gray-600 mb-4 text-sm">{post.discription.split(' ').slice(0, 20).join(' ')}...</p>
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
        </div>

        {/* Right section - 40% */}
        <div className="w-full lg:w-2/5 space-y-8">
          {/* Social card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">About Our Newsletter</h3>
            <p className="text-gray-600 mb-4 text-sm">
              At Care Compass, we're dedicated to providing valuable resources
              and insights to help families navigate senior care options and
              improve quality of life for aging loved ones.
            </p>
            <div className="flex space-x-4">
              <a href={contact?.twitter || ""} className="text-black hover:text-gray-600">
                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href={contact?.facebook || ""} className="text-black hover:text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href={contact?.instagram || ""} className="text-black hover:text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a href={contact?.linkedin || ""} className="text-black hover:text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Popular posts card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Popular Posts</h3>
            <div className="space-y-4">
              {popularBlogs.slice(0,3).map((post,index) => (
                <div key={index} className="flex items-start space-x-3"  onClick={() => handleCardClick(post.encrypted_id)}>
         
                  <div className="relative h-20 w-22 flex-shrink-0">
                    <Image
                      src={post.pic}
                      alt={post.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
             
                  <div>
                  
                    <h4 className="font-medium text-gray-900">{post.name}</h4>
               
                    <p className="text-sm text-gray-500 mt-4">
  {new Date(post.date).toLocaleDateString()}
</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* Newsletter card */}
          <div className="bg-[#CFDDED] rounded-lg shadow-md p-6 text-black">
            <h3 className="text-xl font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="mb-4">
              Get the latest caregiving tips and senior living resources delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="w-full bg-primary text-xl text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-primary transition-colors duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSec;
