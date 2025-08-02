'use client';
import React,{useState,useEffect} from "react";
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

const ThankyouSec = () => {

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
    <div className="flex flex-col md:flex-row h-auto bg-green-30 p-4 md:p-10">
      {/* Left section - hide on small screens, visible on md and up */}
      <div className="hidden md:flex w-1/2 h-90 bg-white items-center justify-center mt-0 md:mt-24 shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          <span className="text-secondary">Thank</span>
          <span className="text-primary">You</span>
        </h1>
      </div>

      {/* Right section - always visible and full width on small screens */}
      <div className="w-full md:w-1/2 h-auto md:h-120 mt-10 md:mt-0 bg-[#DDE4E7] flex flex-col items-start justify-center 
                  rounded-br-full rounded-tr-full shadow-2xl p-4 md:p-8">
        <p className="text-secondary text-base md:text-lg lg:text-xl p-2 md:p-8 text-start">
          We are glad to be trusted for our efforts of bringing ease to life through. With ‘Care, Compassion & Courtesy’ protocol and motto of ‘Patient First Always’, over 30 in-house employees and around 15 outsource partners untiringly strive to earn the trust of patients.
        </p>
        <div className="px-4 mt-4 md:px-10">
          <button className="px-6 py-2 md:px-8 md:py-3 bg-white hover:bg-secondary hover:text-white 
                            text-secondary font-semibold text-base md:text-lg lg:text-xl rounded-full 
                            transition duration-300 mb-4 md:mb-8">
            Call Now : {contact?.MainLine}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankyouSec;
