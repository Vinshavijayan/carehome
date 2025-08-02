'use client';
import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Location from './location'
import { toast } from 'react-toastify';
import { postRequest,getRequest } from "@/api";

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

const MainSec = () => {
 const [contact, setContact] = useState<Contact | null>(null);
    const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    relationship: '',
    message: '',

  });
  
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const data = {
        ...formData,
      };
  console.log(data);
      const url = "/send_mail_api"; 
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
  
      toast.success("Enquiry submitted successfully!");
      setShowPopup(true);
      
      setFormData({
        firstName: '',
        lastName: '',
        relationship: '',
        phone: '',
        email: '',
        message: '',
      });
      setError('');
    } catch (error) {
      console.error("Enquiry submission error", error);
      toast.error("Failed to submit the enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };


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

{/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Thank You!</h3>
              <button 
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-600 text-center">
                Your message has been sent successfully. We'll get back to you soon.
              </p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={closePopup}
                className="bg-[#A2C7D7] hover:bg-secondary text-secondary hover:text-[#A2C7D7] font-bold py-2 px-6 rounded-md transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className=" flex flex-col items-center justify-start p-6">
        {/* Large blue button with red text */}
        <button className="bg-[#A2C7D7] hover:bg-secondary text-secondary hover:text-[#A2C7D7] font-semibold py-6 px-12 rounded-lg text-2xl shadow-lg transform transition duration-200 hover:scale-105 mb-4">
          Call Now : {contact?.MainLine}
        </button>
        
        {/* Small availability text */}
        <p className="text-sm text-gray-600 mb-2">Call Available only Morning 8:00 to Night 11:00 </p>
      </div>

      {/* New Contact Section */}
      <div className="container mx-auto px-4 ">
      
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Contact Form (70% width) */}
      <div className="w-full lg:w-[75%] bg-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-start mb-8">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="+00 1234567890"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="relationship" className="block text-sm font-medium text-gray-700">Relationship to Resident</label>
                <select
                  id="relationship"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="">Select relationship</option>
                  <option value="family">Family</option>
                  <option value="friend">Friend</option>
                  <option value="professional">Professional</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#A2C7D7] text-secondary font-bold text-3xl py-4 px-4 rounded-md hover:bg-secondary hover:text-[#A2C7D7] transition duration-200 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          {/* Cards Section (30% width) */}
          <div className="w-full lg:w-[30%] space-y-4">
            {/* Card 1 - Location */}
<div className="bg-white p-6 rounded-xl shadow-md flex items-start">
  <div className=" text-secondary py-1  rounded-full mr-2">
    <Image
      src="/images/icons/location.png" 
      alt="Location icon"
      width={20} 
      height={20}
      className="h-6 w-6" 
    />
  </div>
  <div>
    <h3 className="font-semibold text-lg mb-2">Our Location</h3>
    {/* <p className="text-gray-600 font-light text-sm mb-1">123 Care Avenue<br />Serenity Valley, ST 12345</p> */}
    <p className="text-gray-600 font-light text-sm mb-1">{contact?.address}</p>
    <div className="flex items-center text-secondary font-medium text-sm mt-4">
      <Link href='#location'>
      <span>Get Direction</span>
       </Link>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
     
    </div>
  </div>
</div>
            
            {/* Card 2 - Phone */}
<div className="bg-white p-6 rounded-xl shadow-md flex items-start">
  <div className=" text-secondary py-1  mr-2">
    <Image
      src="/images/icons/notebook-of-contacts.png" 
      alt="Location icon"
      width={20} 
      height={20}
      className="h-6 w-6" 
    />
  </div>
  <div>
    <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
    <p className="text-gray-600 font-light text-sm mb-1">
      <span className='font-bold'>Main Line:</span> {contact?.MainLine}<br />
      <span className='font-bold'>Admissions:</span> {contact?.admissions}<br />
      <span className='font-bold'>Fax:</span> {contact?.fax}<br />
      <span className='font-bold'>Email:</span> {contact?.email}
    </p>
    
  </div>
</div>
            
            {/* Card 3 - Email/Visiting Hours */}
<div className="bg-white p-6 rounded-xl shadow-md flex items-start">
  <div className=" text-secondary py-1  mr-2">
    <Image
      src="/images/icons/clock.png" 
      alt="Location icon"
      width={20} 
      height={20}
      className="h-6 w-6" 
    />
  </div>
  <div>
    <h3 className="font-semibold text-lg mb-2">Visiting Hours</h3>
    <p className="text-gray-600 font-light text-sm mb-1">
      {contact?.our_worktime}
    </p>
   
  </div>
</div>
            
            {/* Card 4 - Social Media */}
<div className="bg-white p-6 rounded-xl shadow-md flex items-start">
  <div className=" text-secondary py-1  mr-2">
    <Image
      src="/images/icons/connection.png" 
      alt="Location icon"
      width={20} 
      height={20}
      className="h-6 w-6" 
    />
  </div>
  <div>
    <h3 className="font-semibold text-lg mb-3">Connect With Us</h3>
    <div className="flex space-x-4 mb-2">
       <Link href={contact?.twitter || ""} target="_blank" rel="noopener noreferrer">
        <svg className="h-6 w-6 text-black hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      </Link>
      <Link href={contact?.facebook || ""} target="_blank" rel="noopener noreferrer">
        <svg className="h-6 w-6 text-black hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      </Link>
      <Link href={contact?.instagram || ""} target="_blank" rel="noopener noreferrer">
        <svg className="h-6 w-6 text-black hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      </Link>
      <Link href={contact?.linkedin || ""} target="_blank" rel="noopener noreferrer">
        <svg className="h-6 w-6 text-black hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </Link>
     
    </div>
    
  </div>
</div>
          </div>
        </div>
      </div>

     <div id="location">
  <Location />
</div>
    </div>
  )
}

export default MainSec