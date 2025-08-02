
'use client';
import React,{Suspense,useState,useEffect} from "react";
import Image from "next/image";
import Review from "../home/review";
import WelcomeSec from "./welcomeSec";
import ExpertCare from "./expertCare";
import Website from "./website";
import Gallery from "./gallery";
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

const HeroSection = () => {
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
 <Suspense>
    <div className="relative">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[700px] flex items-start justify-center text-center pt-16 md:pt-14">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/home1-bg.jpg"
            alt="Elderly care background"
            fill
            className="object-cover object-center brightness-40"
            quality={100}
            priority
          />
        </div>

        <div className="relative z-10 max-w-8xl px-8 md:px-16 mt-8 md:mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-white">
            Compassionate Care For Your Loved Ones 
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary opacity-90 leading-relaxed">
            Providing personalized, dignified care services to help seniors live{" "}
            <br />
            comfortably and independently at home.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-white hover:bg-secondary hover:text-white text-secondary font-semi-bold text-xl rounded-full transition duration-300">
              Call Now : {contact?.MainLine}
            </button>
          </div>
        </div>
      </div>




<div className="bg-gray-100 pb-20">
  {/* New Overlapping Section */}
  <div className="relative z-20 max-w-8xl mx-auto px-4 md:px-16">
    {/* Blue section (now taller and narrower) */}
    <div className="relative -mt-16 md:-mt-44 lg:-mt-60 bg-[#4089F7] rounded-xl shadow-lg mx-auto max-w-6xl h-26 md:h-34 lg:h-80">
      {/* Empty blue container - just for visual appearance */}
    </div>

    {/* Image at the center of the overlapping portion */}
    <div className="absolute left-1/2 transform -translate-x-1/2 md:-translate-x-1/4 -translate-y-1/2 z-40 w-26 h-26 md:w-48 md:h-48 lg:w-64 lg:h-64 -mt-20 md:-mt-18 lg:-mt-56">
      <Image
        src="/images/icons/Group 126.png" 
        alt="Overlapping Image"
        width={110} 
        height={110} 
        className=" object-cover  "
        priority
      />
    </div>

    {/* White section (positioned over the blue one) */}
    <div className="relative z-30 -mt-24 md:-mt-32 lg:-mt-78 bg-white rounded-xl mx-auto max-w-7xl">
      <WelcomeSec/>
      <ExpertCare />
    </div>
    <Website />
    
    <div className="relative bg-white rounded-xl mx-auto max-w-7xl">
      <Gallery />
    </div>
  </div>
  
  {/* Blue section (now taller and narrower) */}
  <div className="relative -mt-16 md:-mt-24 lg:-mt-60 bg-primary rounded-xl shadow-lg mx-auto max-w-6xl lg:h-64"></div>
</div>

     

      <Review />
    </div>
  </Suspense>
  );
};

export default HeroSection;
