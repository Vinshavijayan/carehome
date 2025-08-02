'use client';
import React,{useState,useEffect} from "react";
import Image from "next/image";
import MissionSec from "./mission";
import TeamSec from "./team";
import ThankyouSec from "./thankyou";
import { getRequest } from "@/api";

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

const FirstSec = () => {

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
    <div className="relative bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] flex items-start justify-center text-center pt-16 md:pt-14">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/about/main.jpg"
            alt="Elderly care background"
            fill
            className="object-cover object-center brightness-50"
            quality={100}
            priority
            style={{
              objectPosition: "center 25%",
            }}
          />
        </div>

        <div className="relative z-10 max-w-8xl px-8 md:px-16 mt-8 md:mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-white">
            <span className="text-primary">About</span> {contact?.name}
          </h1>

          <div className="flex justify-center py-6">
            <button className="px-8 py-3 bg-white hover:bg-secondary hover:text-white text-secondary font-semi-bold text-xl rounded-full transition duration-300">
              Call Now : {contact?.MainLine}
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-8xl mx-auto px-4 md:px-16">
        {/* Blue section (now taller and narrower) */}
        <div className="relative -mt-16 md:-mt-34 lg:-mt-34 bg-primary rounded-xl shadow-lg mx-auto max-w-6xl h-26 md:h-34 lg:h-80">
          {/* Empty blue container - just for visual appearance */}
        </div>

        {/* Image at the center of the overlapping portion */}
            <div className="absolute left-1/2 transform -translate-x-1/2 md:-translate-x-1/4 -translate-y-1/2 z-40 w-20 h-20 md:w-38 md:h-38 lg:w-52 lg:h-52 -mt-28 md:-mt-28 lg:-mt-68">
              <Image
                src="/images/icons/Group 127.png" 
                alt="Overlapping Image"
                width={90} 
                height={90} 
                className=" object-cover  "
                priority
              />
            </div>

        {/* White section (positioned over the blue one) */}
        <div className="relative z-30 -mt-24 md:-mt-32 lg:-mt-78 bg-white rounded-xl mx-auto max-w-7xl py-6">
          <div className="container px-4 py-2 lg:py-6 md:p-1 md:px-4">
            <div className="flex flex-col lg:flex-row ">
              {/* 60% width section */}
              <div className="w-full lg:w-[60%]">
                <div className="p-4">
                  <p className="text-secondary text-lg md:text-xl lg:text-lg pb-4 leading-relaxed ">
                    <span className="font-bold">{contact?.name}</span> we
                    believe that every individual deserves to live with dignity,
                    respect, and compassion. Our mission is to provide a safe,
                    nurturing, and homely environment where residents feel truly
                    cared for—physically, emotionally, and socially.{" "}
                  </p>
                  <p className="text-secondary text-lg md:text-xl lg:text-lg pb-4 leading-relaxed">
                    With years of experience in elderly care, our dedicated team
                    is committed to offering personalized support tailored to
                    each resident’s needs. From daily assistance and medical
                    care to engaging activities and companionship, we focus on
                    enhancing the quality of life every single day.{" "}
                  </p>
                  <p className="text-secondary text-lg md:text-xl lg:text-lg pb-4 leading-relaxed">
                    We understand that choosing a care home is a significant
                    decision. That’s why we strive to create a warm community
                    where families feel confident their loved ones are in good
                    hands. Our values kindness, integrity, and excellence—are at
                    the heart of everything we do. Whether it’s long-term
                    residency, respite care, or specialized support, Good Day
                    Care Home is more than just a place to stay it’s a place to
                    call home.{" "}
                  </p>
                </div>

                {/* Additional portion with blue background */}
                <div className="bg-primary p-8 rounded-xl">
                  <h1 className="text-3xl font-bold text-[#0F2C54]">A Legacy of Compassionate Care</h1>
                  <p className="text-white text-lg md:text-lg py-4">What began as a small 12-bed facility has grown into a respected care provider with 50 beds across two locations, but our family values remain unchanged.
                  Our founder, Dr. Eleanor Thompson, established Serenity Care after seeing the need for more personalized elder care in our community. </p>
                </div>

                
              </div>

              {/* 40% width section with image */}
              <div className="w-full lg:w-[40%] relative hidden lg:block">
                <div className="h-full w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/about/style.jpg" // Replace with your image path
                    alt="Descriptive alt text"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
       <MissionSec />
       <TeamSec />
      </div>

      <ThankyouSec />

      <div className="p-4 lg:p-10"></div>
    </div>
  );
};

export default FirstSec;
